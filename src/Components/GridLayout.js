import styles from '../Components/GridLayout.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { Divider, Grid, Image, Segment, Item } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'

export default function GridLayout() {
    return (
        <>
       {/* <Image src='https://cdn.mos.cms.futurecdn.net/QptEvvA25MM4MgbqVuFf5i.jpg' /> */}
 
    <Segment >
      <Grid columns={2} relaxed="very" >
        <Grid.Column >
            <Item>
            <h1>Exploration</h1>
          <p>
            <Image src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" />
          </p>
            </Item>
          
        </Grid.Column>
        <Grid.Column>
          <h1>Dogfighting</h1>
          <p>
            <Image src="https://cdn.mos.cms.futurecdn.net/QptEvvA25MM4MgbqVuFf5i.jpg" />
          </p>
        </Grid.Column>
      </Grid>

      <Divider vertical className={styles.gridLayout}>And</Divider>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <h1>Salvage</h1>
          <p>
            <Image src="https://imgix.kotaku.com.au/content/uploads/sites/3/2019/12/star-citizen-4k-1.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280" />
          </p>
        </Grid.Column>
        <Grid.Column>
          <h1>Mining</h1>
          <p>
            <Image src="https://www.xfire.com/wp-content/uploads/2021/03/starcitizen.jpg" />
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
    </>
    )
}

