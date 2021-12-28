import styles from './home.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import TransactionForm from './TransactionForm'
import StepSystem from './StepSystem'
import Workflows from '../../Components/Workflows'
import AdminWorkflows from '../office/AdminWorkflows'
import { Divider, Grid, Image, Segment, Item } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'

const panes = [
    { menuItem: "Tab 1", render: () => <Tab.Pane>Step 1<StepSystem /></Tab.Pane> },
    { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
  ];


export default function Home() {
    return (
    
        <>
        <Image src='https://images.pexels.com/photos/2538107/pexels-photo-2538107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
        <section>
            <div className={styles.container}>
            <Tab panes={panes} defaultActiveIndex={0} className={styles.tabNav} />
           
           
           
            
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
        </>
       
             
            

            
        
        
    )
}

