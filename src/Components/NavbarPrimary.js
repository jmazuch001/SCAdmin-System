import React from 'react'
import styled from 'styled-components'
import { AppBar, Drawer, Toolbar, Typography } from '@mui/material'
import ResNavBurger from './ResNavBurger'
import ResponsiveTopNav from './ResponsiveTopNav'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import ComplexTitle from './ComplexTitle'
import { Menu } from 'semantic-ui-react'

export default function NavbarPrimary() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  return (
    
      <div>
          <LiveAppBar>
              
              
                <Link to="/"><ComplexTitle /></Link>
                
                
                  {/* <ResNavBurger/> */}
                  <ResponsiveTopNav/>
              
          </LiveAppBar>
          
      </div>
    
  )
}

// can use "styled.div" or "styled(Menu)" with semantic UI React for LiveAppBar
const LiveAppBar = styled.div`
background: rgb(0,25,48);
  background: linear-gradient(39deg, rgba(0,0,0,1) 15%, rgba(0,41,66,1) 43%, rgba(16,50,42,1) 67%, rgba(0,0,0,1) 91%);  
  background-size:  300% 300%;
  animation: gradient 10s ease infinite;       
  display: flex;
  width: 100%;
  padding: 18px;
  color: white;
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
section {
      /* float: left; */
      text-decoration: none;
      /* margin-top: 10px; */
      text-align: center;
      margin-left: 3rem;

      h4 {
      float: left;
      color: #80d5e8;
      background-image: -webkit-radial-gradient(circle, #80d5e8 0%,#045d8c 100%,#ffffff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      /* display: flex; */
      padding: 12px;
      font-size: 20px;
      }
    }

    @media (max-width: 768px) {
      h4 {
        display: none;
      }
    }
`
