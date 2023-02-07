import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from "react-responsive";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const FormContainer = styled(Container)`
padding-top: 1rem;
margin: auto;
width: 50%;
height: 50%;
/* border: solid;
border-color: coral;
border-collapse: collapse;
background-color: lightgray; */
`

export const FormBox = styled(Box)`
background-color: orange;
padding: 1rem;
/* width: 50%; */
margin: 2rem 8rem 8rem 8rem;
display: flex;
transition-property: all;
background: lightgray;
border-radius: 15px;
background: linear-gradient(25deg, rgba(128,128,128,1) 0%, rgba(56,56,56,1) 49%, rgba(113,113,113,1) 84%);
color: coral;
box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.71);
box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.71);
@media (max-width: 768px) {
  /* display: none; hides the component once it hits this viewport size */
  display: flex;
  /* background-color: lightgray; */
  background: linear-gradient(25deg, rgba(128,128,128,1) 0%, rgba(56,56,56,1) 49%, rgba(113,113,113,1) 50%);
  margin: auto;
  border-radius: 20px;
  width: auto;
  margin: 1rem 1rem;
  color: coral;
  border-end-start-radius: 80px 80px;
  /* opacity: 90%; */
  -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.71);
  -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.71);
  box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.71);
}

h1 {
    text-align: center;
}

`

