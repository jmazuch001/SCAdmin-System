import React, {useState, Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './Components/Navbar';
// pages and components for project
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import BadgeDesigner from './pages/office/BadgeDesigner'
import Office from './pages/office/Office'
import QR_Code from './Components/QR_Code'
import AccessControl from './pages/office/AccessControl'
import Analytics from './pages/office/Analytics'
import Reporting from './pages/office/Reporting'
import Inventory from './pages/office/Inventory'

import Sidebar from './Components/Sidebar'
import { useAuthContext } from './hooks/useAuthContext'
import useMediaQuery from '@mui/material/useMediaQuery';
import 'semantic-ui-css/semantic.min.css'


function App() {
  const { authIsReady, user } = useAuthContext()
  // const isActive = useMediaQuery("(max-width: 400px)");
  // const testing = window.matchMedia("(max-width: 400px)")

  useEffect(() => {
    function handler() {
      console.log("Window changed", testing.matches);
    }

    const testing = window.matchMedia('(max-width: 400px)');
    testing.addEventListener("change", handler);

    return () => {
      testing.removeEventListener("change", handler)
    };

  }, []);

  return (
    <div className="App">
      {authIsReady && (
        
      
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route exact path="/">
            {!user && <Redirect to='/login' />}
            {user && <Home />}
          </Route>

          <Route exact path="/login">
            {user && <Redirect to="/" />}
            {!user && <Login />}
          </Route>

          <Route path="/badgedesigner">
            {!user && <Redirect to='/login' />}
            {user && <BadgeDesigner />}
          </Route>

          <Route path="/office">
            {!user && <Redirect to='/login' />}
            {user && <Office />}
            
          </Route>

          <Route path="/signup">
            {user && <Redirect to='/' />}
            {!user && <Signup />}
          </Route>

          <Route path='/AccessControl'>
            {!user && <Redirect to='/login' />}
            {user && <AccessControl />}
          </Route>
          <Route path='/Analytics'>
            {!user && <Redirect to='/login' />}
            {user && <Analytics />}
          </Route>
          <Route path='/Reporting'>
            {!user && <Redirect to='/login' />}
            {user && <Reporting />}
          </Route>
          <Route path='/Inventory'>
            {!user && <Redirect to='/login' />}
            {user && <Inventory />}
          </Route>

        </Switch>
      </BrowserRouter>
      )}
    </div>
  )
  
}

export default App;
