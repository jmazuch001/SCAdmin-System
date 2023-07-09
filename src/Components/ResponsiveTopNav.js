import React from 'react'
import styled from 'styled-components'
import HIGROUPLogo from './HIGROUPLogo'
import ResNavBurger from './ResNavBurger'
import { Typography } from '@mui/material'
import { useAuthContext } from '../hooks/useAuthContext'
import ComplexTitle from './ComplexTitle'
// import MediaQuery from 'react-responsive/types/Component'
// responsive Top Navbar >> Responsive Hamburger Menu

const Nav = styled.nav`
  width: 100%; 
  height: 65px;
  padding: 0 20px;
  /* display: flex; */
  /* justify-content: space-between; */
  /* float: left; */

  .logo{
    padding: 15px 0;
    
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
      h1 {
        display: none;
      }
    }

`



const ResponsiveTopNav = () => {

  const { user } = useAuthContext()
  return (
    <Nav>
      
        {/* <img src='/media content/HIG_Logo_Trans.png'/> */}
          <ComplexTitle />
          
            {/* <HIGROUPLogo /> */}
          
          {/* <section>
            <h4>Hellstrom Investment Group, LLC.</h4>
          </section> */}
      
      <ResNavBurger/>
    </Nav>
  )
}

export default ResponsiveTopNav