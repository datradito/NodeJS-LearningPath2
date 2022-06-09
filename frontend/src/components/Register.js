import { connect } from 'react-redux';
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Alert, Toast } from 'reactstrap';
import authActions from '../redux/actions/authActions';
import Countries from './Countries';
import { GoogleLogin } from 'react-google-login';

const Register = (props) => {
    const [newUser, setNewUser] = useState({userName: "", password: "", email: ""})
    const [errors, setErrors] = useState([])
    const seeInput = e => {
        const value = e.target.value
        const campo = e.target.name
        setNewUser({
            ...newUser,
            [campo]: value
        })
    }
    const responseGoogle = async (response) => {
        console.log(response)
        if (!response.error) {
            const respuesta = await props.addUser({
                email: response.profileObj.email,
                userName: response.profileObj.givenName,
                password: "A" + response.profileObj.googleId + "a",
                urlPic: response.profileObj.imageUrl,
            })
            console.log(respuesta)
            if (respuesta && !respuesta.success) {
                setErrors(respuesta.errores)
            } else {
                alert("usuario creado")
            }
        }
      }

    const validateUser = async e => {
        e.preventDefault()
        setErrors([])
        const response = await props.addUser(newUser)
        console.log(response)
        if (response && !response.success) {
            setErrors(response.errores)
        } else {
            <Toast>Usuario Creado</Toast>
        }
    }
    return (
            <div className="container">
                <Form className="form">
                    <div>
                        <FormGroup className="d-flex mt-5" >
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="FirstName" name="firstName"/>
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="LastName" name="lastName"/>
                        </FormGroup>
                        <FormGroup  className="d-flex mt-2" >
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="UserName" name="userName"/>
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="Email" name="email"/>
                        </FormGroup>
                        <FormGroup className="d-flex mt-2 " >
                            <Input className="text-center input" onChange={seeInput} type="password" placeholder="Password" name="password"/>
                            <select className="text-center input" onChange={seeInput} type="select" placeholder="pais" name="country">
                                <Countries />
                            </select>
                        </FormGroup>
                        <FormGroup className="d-flex mt-2 mb-3">
                            <Input className="text-center" onChange={seeInput} type="text" placeholder="UrlPic" name="urlPic"/>
                        </FormGroup>
                        <Button onClick={validateUser}>Register</Button>
                    </div>
                </Form>
                <div className="d-flex justify-content-center">
                        <GoogleLogin
                            clientId="764351894138-6glj9tr5sa01vvu16l20m6cco94m3l2b.apps.googleusercontent.com"
                            buttonText="Register with google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                </div>
                <div>
                    {errors.map((error, index) =>
                        <Alert className={index % 2 === 0 ? 'alert-l bg-danger' : 'alert-r bg-danger'} key={index}>
                            {error}
                        </Alert>
                    )}
                </div>
            </div>
    )
}

const mapDispatchToProps = {
    addUser: authActions.newUser
}

const mapStateToProps = state => {
    return {
        loggedUser: state.authR.loggedUser
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Register)