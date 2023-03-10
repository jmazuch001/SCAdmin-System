import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from "react-responsive";
// import Container from '@mui/material/Container';


// SUI Components / UI
import {Form, Container, Input, Button} from 'semantic-ui-react'


export const FormContainer = styled(Container)`
background-color: orange;
    text-align: center;
    padding: 3rem;
    /* width: 50%; */
    margin: 4rem 4rem 4rem 4rem;
    /* display: flex; */
    transition-property: all;
    /* background: lightgray; */
    border-radius: 15px;
    border-top: 2px solid rgb(89, 250, 156);
    border-bottom: 2px solid rgb(89, 250, 156);
    background-color: rgb(1, 12, 12, 1.0);
    /* background: linear-gradient(
      25deg,
      rgba(128, 128, 128, 1) 0%,
      rgba(56, 56, 56, 1) 49%,
      rgba(113, 113, 113, 1) 84%
    ); */

    /* background: rgb(31,31,31); */
    /* background: linear-gradient(25deg, rgba(31,31,31,1) 0%, rgba(0,0,0,1) 42%, rgba(13,37,0,1) 53%, rgba(0,0,0,1) 64%, rgba(22,22,22,1) 100%); */
    /* background-color: rgb(1, 12, 12, 0.2); */
    color: lightgreen;
    text-shadow: 0px 1px 2px #E0E0E0;
    box-shadow: rgba(10, 100, 93, 0.65) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    @media (max-width: 768px) {
      /* display: none; hides the component once it hits this viewport size */
      /* display: flex; */
      /* background-color: lightgray; */
      /* background: linear-gradient(
        25deg,
        rgba(128, 128, 128, 1) 0%,
        rgba(56, 56, 56, 1) 49%,
        rgba(113, 113, 113, 1) 50%
      ); */
      /* background-color: rgb(1, 12, 12, 1.0); */

      text-align: center;
      overflow: hidden;
      border-radius: 15px;
      margin-top: 4rem;    
      margin-bottom: 4rem;
      color: #BCFFB7;
      border-end-start-radius: 80px 80px;
      text-shadow: 0px 1px 2px #E0E0E0;
      box-shadow: rgba(10, 70, 93, 0.65) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      /* opacity: 90%; */
      /* -webkit-box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71);
      -moz-box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71);
      box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71); */
      
    }
  
    h1 {
      text-align: center;
      color: white;
    }

    
  `

export const NewForm = styled(Form)`
    padding-top: 1rem;
margin: auto;
width: 75%;
height: 75%;
/* border: solid;
border-color: coral;
border-collapse: collapse;
background-color: lightgray; */
  `;



export const CustSpan = styled.span`
/* background-color: orange; */
padding: 1rem;
/* width: 50%; */
/* margin: 2rem 8rem 8rem 8rem; */
display: flex;
transition-property: all;
background: lightgray;
/* background: linear-gradient(25deg, rgba(128,128,128,1) 0%, rgba(56,56,56,1) 49%, rgba(113,113,113,1) 84%); */
/* color: darkred; */
box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.71);
box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.71);
width: 100%;
margin-bottom: 1rem;
border-inline-end: 4rem solid;
writing-mode: horizontal-tb;
direction: rtl;
  /* margin: 1rem 1rem; */
  border-radius: 15px;
/* justify-content: center; */
h4 {
  text-align: center;
  color: black;
  font-weight: bold;
}

ul {
  text-align: center;
  color: red;
}
`
