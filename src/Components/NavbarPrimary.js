import React from 'react'
import styled from 'styled-components'
import { AppBar, Drawer, Toolbar, Typography } from '@mui/material'
import ResNavBurger from './ResNavBurger'
import ResponsiveTopNav from './ResponsiveTopNav'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function NavbarPrimary() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  return (
    
      <div>
          <LiveAppBar>
              <Toolbar>
              <Typography>
                <Link to="/"  >Hellstrom Investment Group, LLC.</Link>
                </Typography>
                
                  {/* <ResNavBurger/> */}
                  <ResponsiveTopNav/>
              </Toolbar>
          </LiveAppBar>
          <Toolbar/>
      </div>
    
  )
}

const LiveAppBar = styled(AppBar)`
  background: linear-gradient(34deg, rgb(1, 27, 56) 8%, rgba(0,0,0,1) 10%, rgb(42, 42, 42) 32%, rgba(0,0,0,1) 42%, rgb(54, 54, 54) 56%, rgba(15,15,15,1) 77%, rgb(85, 38, 11) 92%);
  background-size:  300% 300%;
  animation: gradient 10s ease infinite;       
  display: flex;
  width: 100%;
  padding: 10px;
  color: coral;
  /* position: sticky; */
  @keyframes gradient {
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}
&:hover:after, 
&:focus:after,
&:active:after {
  background: rgb(192, 107, 10);
    /* background: linear-gradient(90deg, rgb(235, 233, 231) 3%, rgb(10, 10, 10) 10%, rgba(0,0,0,1) 32%, rgb(206, 203, 200) 42%, rgba(0,0,0,1) 100%); */
  transition-duration: 1.3s;
    left: 0;
    right: auto;
    width: 100%;
    padding: 4px;
}
&:after {
    content: "";
    position: absolute;
    z-index: 1;
    right: 0;
    width: 0;
    bottom: -5px;
    /* background: linear-gradient(90deg, rgb(226, 221, 215) 3%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 32%, rgba(125,63,16,1) 42%, rgba(0,0,0,1) 100%); */
    background: #FF0000;
    height: 4px;
    transition-duration: 2.3s;
    transition-timing-function: ease-in-out;
   box-shadow: 7px 3px 3px rgb(1, 27, 56);
}
 
`
