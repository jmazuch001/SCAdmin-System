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

export default function CustTextField() {
  return (
    <div>
        <TextInput fullWidth  id='filled-basic' variant='filled'></TextInput>
    </div>
  )
}

const TextInput = styled(TextField)`
background: lightgray;
border-radius: 5px;
margin-top: 1rem;
`