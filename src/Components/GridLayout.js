// import styles from './GridLayout.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ImageListItem from '@mui/material/ImageListItem'
import Container from '@mui/material/Container'
// import { Divider, Grid, Image, Segment, Item } from "semantic-ui-react";
// import { Tab } from "semantic-ui-react";
// import { Container } from 'semantic-ui-react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFA669',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  padding: 10,
  margin: 20,
  color: theme.palette.text.secondary
}));




export default function GridLayout() {
    return (
        <div >
          <hr/>
       <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <h1>Exploration</h1>
            <p>/// Page Under Construction \\\</p>
            {/* <img className='grid-img' src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" /> */}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <h1>Dogfighting</h1>
          <p>/// Page Under Construction \\\</p>
            {/* <img className='grid-img' src="https://cdn.mos.cms.futurecdn.net/QptEvvA25MM4MgbqVuFf5i.jpg" /> */}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <h1>Salvage</h1>
          <p>/// Page Under Construction \\\</p>
            {/* <img className='grid-img' src="https://imgix.kotaku.com.au/content/uploads/sites/3/2019/12/star-citizen-4k-1.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280" /> */}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <h1>Mining</h1>
          <p>/// Page Under Construction \\\</p>
            {/* <img className='grid-img' src="https://www.xfire.com/wp-content/uploads/2021/03/starcitizen.jpg" /> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
    
    </div >
    )
}

