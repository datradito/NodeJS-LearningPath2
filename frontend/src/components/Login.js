import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Alert, Toast} from 'reactstrap';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import { GoogleLogin } from 'react-google-login';



const Login = (props) => {
    const [userLogin, setUserLogin] = useState({userName: "", password: ""})
    const [errors, setErrors] = useState([])

    const seeInput = e => {
        const value = e.target.value
        const campo = e.target.name
        setUserLogin({
            ...userLogin,
            [campo]: value
        })
    }
    const responseGoogle =(response) => {
        if (!response.error) {
            const respuesta = props.loginUser({
                userName: response.profileObj.givenName,
                password: "A" + response.profileObj.googleId + "a"

            })
            if (respuesta && !respuesta.success) {
                setErrors(respuesta.errores)
            } else {
                alert("Bienvenido")
            }
            console.log(respuesta)
        }
      }
    const validateUser = async e => {
        setErrors([])
        const response = await props.loginUser(userLogin)
        if (response && !response.success) {
            setErrors([response.mensaje])
        } else {
            <Toast>Bienvenido</Toast>
        }
    }
    const keyPress = e => {
      if (e.key === 'Enter') {
        validateUser()
      }
    }
    return (
        <div className="container">
        <Form className="form">
            <div>
                <FormGroup className="d-flex mt-5" >
                    <Input className="text-center input" onKeyPress={keyPress} onChange={seeInput} type="text" placeholder="userName" name="userName"/>
                    <Input className="text-center input" onKeyPress={keyPress} onChange={seeInput} type="password" placeholder="password" name="password"/>
                </FormGroup>
                <Button onClick={validateUser}>login</Button>
            </div>
            </Form>
            <div className="d-flex justify-content-center">
                                <GoogleLogin
                                    clientId="764351894138-6glj9tr5sa01vvu16l20m6cco94m3l2b.apps.googleusercontent.com"
                                    buttonText="Login with google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
            </div>
            <div>{errors && errors.map((error, index) => 
                    <Alert className={index % 2 === 0 ? 'alert-l bg-danger' : 'alert-r bg-danger'}>
                        {error}
                    </Alert>
                )}
            </div>
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.authR.loggedUser
    }
  }

const mapDispatchToProps = {
    loginUser: authActions.loginUser
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)