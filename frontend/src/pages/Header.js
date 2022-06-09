import React from 'react';
import {NavLink} from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
const Header = (props) => {
    if (props.loggedUser) {
        var links = <>
        <NavLink className="navlink" to="/cities">Cities</NavLink>
        <NavLink className="navlink" to="/" onClick={() => props.logoutUser()}>LogOut</NavLink>
                <div className="d-flex align-items-center justify-content-end">
                    <h3>Hi {props.loggedUser.userName}! </h3>
                    <img src={props.loggedUser.urlPic} alt="..." width="50vw" className="rounded"/>
                </div>
        </>
    } else {
        // eslint-disable-next-line no-redeclare
        var links = <>
            <NavLink className="navlink" to="/register">Register</NavLink>
            <NavLink className="navlink" to="/login">login</NavLink>
            <NavLink className="navlink" to="/cities">Cities</NavLink>
        </>
    }
    return (
        <header>
        <div className="hdr bg-l">
            
            <img src="../assets/logo.png" alt="..." className="logo"></img>

        </div>
            <div className="d-flex justify-content-between align-items-center m-3">
                <NavLink className="navlink" to="/">Home</NavLink>
                {links}
            </div>
        </header>
    )
} 
const mapStateToProps = state => {
    return {
        loggedUser: state.authR.loggedUser
    }
}
const mapDispacthToProps = {
    logoutUser: authActions.logOutUser
}
export default connect(mapStateToProps, mapDispacthToProps)(Header)