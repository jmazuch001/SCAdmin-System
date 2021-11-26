import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
// pages and components for project
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import BadgeDesigner from './pages/office/BadgeDesigner'
import Office from './pages/office/Office'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/badgedesigner">
            <BadgeDesigner />
          </Route>
          <Route path="/office">
            <Office />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
