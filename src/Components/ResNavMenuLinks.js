import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { CornerButton } from './Custom MUI Forms/MultiStage Forms/CustButton'



const MenuUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    float: right;
      z-index: 10;
    li {
      padding: 18px 10px;
      /* transition: 2.3s; */
      color: lightgreen;
      align-items: right;
      float: right;
  // CSS
  /* color: #80d5e8;
  background-image: -webkit-radial-gradient(ellipse, #80d5e8 0%,#ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent; */
    }
    h4 {
      display: none;
    }
 
  
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        /* border-radius: 12px; */
        border-top-left-radius: 10%;
        border-bottom-left-radius: 10%;
        border-left-color: #8CCB88;
        border-left-style: groove;
        /* text-align: center; */
        /* animation: 1s stretch; */
        /* background: linear-gradient(25deg, rgba(0,0,0,1) 0%, rgba(75,0,0,1) 41%, rgba(0,0,0,1) 42%, rgba(0,0,0,1) 44%, rgba(116,1,1,1) 67%, rgba(0,0,0,1) 68%);                 */
        /* transition: 4.0s; */
        /* background: radial-gradient(circle, rgba(0,0,0,1) 24%, rgba(35,56,0,1) 50%); */
        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,1) 24%, rgba(0,98,120,1) 100%);
        background-size:  300% 300%;
        animation: gradient 10s ease infinite; 
        
       
        h4 {
          display: inline-block;
          text-align: center;
          color: #80d5e8;
          background-image: -webkit-radial-gradient(circle, #80d5e8 0%,#045d8c 100%,#ffffff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
        }
        li {
            color: lightgreen;
            /* transition: 0.5s; */
            text-align: left;
        }
        li:hover {
            text-shadow: 2px 1px 4px rgba(255,255,255,0.3);
            font-size: 25px;
            transition: 0.5s;
            transition-timing-function: ease-in-out;
            color: #FF4520;
        }
        
        .div {
            transition: 0.5s;
            border-radius: 12px;
            width: 50%;
            transition-timing-function: ease-in-out;
        }
        .div:hover {
            transform: translateY(10px);
            /* background: white; */
            /* transition: 0.5s; */
            /* transition-delay: 0.5s; */
            color: #B0FDAA;
            border-radius: 15px;
            border-left: 2px solid rgb(0, 115, 141);
            border-right: 2px solid rgb(0, 115, 141);
            transition-timing-function: ease-in-out;
            padding: 5px;
            border-radius: 17.5px;
            width: 90%;
            opacity: 55%;
            background: rgb(0,0,0);
            /* background: radial-gradient(circle, rgba(0,0,0,1) 24%, rgba(11,18,0,1) 100%); */
            background: rgb(0,0,0);
            background: radial-gradient(circle, rgba(0,0,0,1) 24%, rgba(0,30,37,1) 100%);
            /* transform: translateY(7px); */
            /* background: linear-gradient(25deg, rgba(0,0,0,1) 19%, rgba(92,0,0,1) 22%, rgba(0,0,0,1) 26%); */
        }
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
        /* li:hover:after {
            text-shadow: 2px 1px 4px rgba(255,255,255,0.3);
            font-size: 25px;
            transition-delay: 1s;
            transition-timing-function: ease-out;
            color: #FF4520;
        } */
    }
`

const ResNavMenuLinks = ({ open }) => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <MenuUl open={open}>
        {!user && (
                    <>
                      <li className="div"><Link to="/login" className='link-text'>Login</Link></li>
                      <li className="div"><Link to="/signup">Signup</Link></li>   
                    </>
                )}
        {user && (
                    <>
                      <li>Hello, {user.displayName}</li>
                      {/* <li><Link to="/AccessControl" className={styles['link-text']}>QR Code Generator</Link></li> */}
                      <li className="div"><Link to="/office">Office</Link></li>
                      <li className="div"><Link to="/">Home</Link></li>
                      <li className="div">
                        {!isPending && <button onClick={logout}>Logout</button>}
                        {isPending && <button  disabled>Logging out...</button>}
                      </li>
                    </>
                 )}
    </MenuUl>
  )
}

export default ResNavMenuLinks

// this component is production ready as of 1/9/2022
// baked-in animations and texture changes will remain intact pending necessary
// clean-up for production use
// Animations included for gradient