import React from "react";
import styled from 'styled-components'
import { Image } from "@mui/icons-material";

const Logo = styled.img`
    display: block;
    height: 55px;
    width: 55px;
    background-image: url('/media content/HIG_Logo_Trans.png');
    object-position: left top;
`

export default function HIGROUPLogo() {
  return (
  
        <div>
            <Logo src='/media content/HIG_Logo_Trans.png'/>
        </div>

        
    
  )
}
