import React, { Component } from "react";
import { Banner } from "../components/Banner";
import Carrousel from "../components/Carrousel";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Banner/>
              <Carrousel />
            </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}