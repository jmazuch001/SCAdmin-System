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
// import ImageRight from '../home/EyesOnThePrize'
// import bgImage2 from '../home/horizon2'
import GridLayout from '../../Components/GridLayout'
import BottomNavbar from '../../Components/BottomNavbar'

// const panes = [
//     { menuItem: "Tab 1", render: () => <Tab.Pane>Step 1<StepSystem /></Tab.Pane> },
//     { menuItem: "Tab 2", render: () => <Tab.Pane>Filler COntent</Tab.Pane> },
//     { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
//   ];


export default function Home() {
    return (
    
        <div className={styles.body}>
            {/* sizing is not absolute */}
        
        {/* <Grid> */}
            
                {/* <Grid.Column width="max-width"> */}
            
            
            <Image src={bgImage} alt='horizon' className="img-fluid" width='max-width'/>
            
        
        {/* </Grid.Column> */}
           
        {/* </Grid> */}
        
        <Container>
            {/* <Tab panes={panes} defaultActiveIndex={0} className={styles.tabNav} /> */}
            <BottomNavbar />
        </Container>
        
        <Container>
            {/* <GridLayout /> */}
            <nav>
                <header>
                    <BottomNavbar />
                </header>
            </nav>
            
            <div className={styles['grid-container']}>
                <div className={styles["grid-item"]}>
                    <h1>
                        Mining
                    </h1>
                    <Image src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" /></div>
                <div className={styles["grid-item"]}>
                    <h1>
                        Salvage
                    </h1>
                    <Image src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" /></div>
            </div>
            
            
            <div className={styles['grid-container']}>
                <div className={styles["grid-item"]}>
                    <h1>
                        Training
                    </h1>
                    <Image src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" />
                    </div>
                <div className={styles["grid-item"]}>
                    <h1>
                        Trade
                    </h1>
                    <Image src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" />
                    </div>
            </div>
            
            
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
        {/* BOTTOM SECTION GRID */}
    <Grid celled>
        <Grid.Row>
        <Grid.Column width={3}>
            <h4>
                Inquiries
            </h4>
            <p>
                Together, we stand united with our partners in a common goal of increasing revenue.
            </p>
            <Image src='https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg' />
        </Grid.Column>
        <Grid.Column width={10}>
            <Image src='https://images.pexels.com/photos/7054384/pexels-photo-7054384.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' />
        </Grid.Column>
        <Grid.Column width={3}>
            <h4>
                Investing
            </h4>
            <p>
                Working as a team, our partner organizations have benefited from extensive investing.
            </p>
            <Image src='https://images.pexels.com/photos/7054384/pexels-photo-7054384.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' />
        </Grid.Column>
        </Grid.Row>
    </Grid>

    {/* <Container>
            <item>
            <Image src={bgImage} alt='horizon' className="img-fluid"/>
            </item>
        </Container> */}
        
        </div>
       
             
            

            
        
        
    )
}

