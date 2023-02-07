import * as React from 'react';
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


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    
    <div style={{padding: '2rem'}}>
      <CustomBox>
        
      <CustomTableContainer component={Paper}>
      <h1>Project Overview</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <MediaQuery query="(max-device-width: 1024px)">
          <p>This is a MQ Test</p>
        </MediaQuery>
      </Table>
    </CustomTableContainer>
    </CustomBox>
  </div>  
  );
}


export const CustomTableContainer = styled(TableContainer)`
padding-top: 1rem;
margin: auto;
width: 50%;
height: 50%;
border: solid;
border-color: coral;
border-collapse: collapse;
background-color: blue;


h1 {
  text-align: center;
  color: coral;
}
@media (max-width: 768px) {
  display: flex;
  flex-flow: column nowrap;
  color: coral;
  text-align: left;
}
`

export const CustomBox = styled(Box)`
background-color: gray;
padding: 1rem;
/* width: 50%; */
margin: 2rem 6rem 6rem 6rem;
display: flex;
color: coral;
@media (max-width: 768px) {
  /* display: none; hides the component once it hits this viewport size */
  display: none;
  background-color: blue;
  border-radius: 20px;
  width: 100%;
  margin: 1rem 0rem;
}
`