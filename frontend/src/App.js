/* eslint-disable no-redeclare */
import Header from './pages/Header'
import './style.css'
import Footer from  './pages/Footer'
import Cities from './pages/Cities'

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import City from "./components/City";
import Home from './pages/Home';
import Register from './components/Register'
import Login from './components/Login'
import { connect } from 'react-redux'
import authActions from './redux/actions/authActions'
import { useState } from 'react'

const App = (props) => {
  const [reload, setReload] = useState(false)
  console.log(props)
  if (props.loggedUser) {
    var routes = 
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cities" component={Cities}/>
      <Route path="/cities/:id" component={City}/>
      <Redirect to="/cities" />
      </Switch>
    </>
  } 
  else if (localStorage.getItem('token')) {
    props.logLS(localStorage.getItem('token'))
    .then(respuesta => {
      if (respuesta === '/') setReload(!reload)
    })
  }
  else {
    var routes =  <><Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login"component={Login}/>
      <Route exact path="/cities" component={Cities}/>
      <Route path="/cities/:id" component={City}/>
      <Redirect to="/" />
      </Switch></>
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        {routes}
        <Footer />
      </BrowserRouter>
  </>)
}
const mapStateToProps = state => {
  return {
    loggedUser: state.authR.loggedUser
  }
}
const mapDispatchToProps = {
  logLS: authActions.logLS
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
