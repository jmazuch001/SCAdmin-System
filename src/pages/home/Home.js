import styles from './home.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import TransactionForm from './TransactionForm'
import StepSystem from './StepSystem'
import Workflows from '../../Components/Workflows'
import AdminWorkflows from '../office/AdminWorkflows'
import { Divider, Image, Segment, Item, Grid, Rail } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'
import bgImage from '../home/horizon.png'
import GridLayout from '../../Components/GridLayout'

const panes = [
    { menuItem: "Tab 1", render: () => <Tab.Pane>Step 1<StepSystem /></Tab.Pane> },
    { menuItem: "Tab 2", render: () => <Tab.Pane>Filler COntent</Tab.Pane> },
    { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
  ];


export default function Home() {
    return (
    
        <div className={styles.body}>
            {/* sizing is not absolute */}
        
        <Grid>
            <Grid.Row>
                <Grid.Column width="max-width">
            
            
            <Image src={bgImage} alt='horizon' className="img-fluid"/>
            
        
        </Grid.Column>
            </Grid.Row>
        </Grid>
        
        <Container>
            <Tab panes={panes} defaultActiveIndex={0} className={styles.tabNav} />
        </Container>
        <Container>
            <GridLayout />
        </Container>
        <section>
            <div className={styles.container}>
            
           <div>
           <h1 className="orgSpan">What Our Organization Does:</h1>
           <p>
               We bring other organizations together in a common cause to provide 
               an environment where all can thrive and successfully operate under the 
               same set of agreed-upon rules. 
           </p>
           <h3>
               Why trust our corporate umbrella?
           </h3>
           <p>
               Never stifled by over-regulation, all members
               are encouraged to bring unique solutions to the table.
           </p>
            </div>
           </div>
        </section>
    <Grid celled>
        <Grid.Row>
        <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={10}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        </Grid.Row>
    </Grid>

    <Container>
            <item>
            <Image src={bgImage} alt='horizon' className="img-fluid"/>
            </item>
        </Container>
        
        </div>
       
             
            

            
        
        
    )
}

