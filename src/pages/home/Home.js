import styles from './home.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import TransactionForm from '../../Components/TransactionForm'
import StepSystem from './StepSystem'
import Workflows from '../../Components/Workflows'
import AdminWorkflows from '../office/AdminWorkflows'
import { Divider, Image, Segment, Item, Grid, Rail } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
// import { Container } from 'semantic-ui-react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import bgImageTop from '../home/horizon.png'
// import ImageRight from '../home/EyesOnThePrize'
// import bgImage2 from '../home/horizon2'
import GridLayout from '../../Components/GridLayout'




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
            
            
            <Image src={bgImageTop} alt='horizon' className="img-fluid" width='max-width'/>
        <Container>
            <GridLayout />
        </Container>
        {/* </Grid.Column> */}
           
        {/* </Grid> */}
        

        
        <Container>
            {/* <GridLayout /> */}

            
            <div className={styles['grid-container']}>
                
        </div>
        <section>
        <h1>
            Inventory Controls
        </h1>
        <p>
            Techniques in data entry via an administrative portal aids in organization stability, 
            ascertaining a status at a glance, and pinpoints where and what gaps need to be filled.
        </p>
        <p>
            Through a live-database, members can contribute to a recordable inventory. 
        </p>
        </section>
        
        <hr className={styles['line-glow']} />

        <section>
        <div className={styles['grid-container']}>
                    <div className={styles["grid-item"]}>

                        <Image src="https://starcitizen.tools/images/4/46/Manifest_1_by_zane_bien.jpg" />
                    
                </div>
                </div>
                </section>
        </Container>

        <hr>
        </hr>
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
               are encouraged to bring unique solutions to the table. Members of the Board of Commissioners
               are tenured at the minimum of two years of service to the organization alongside our highest 
               ranking members having more than seven years of community experience. 
           </p>
           <h3>
                What about quality of members?
           </h3>
           <p>
                We value quality over quantity. An equal chance for all to contribute allows us to 
                screen a wide range of prospective members at the minimum age level of 21 and give 
                feedback when and where needed. Improvement programs are essential to maintaining 
                a high standard not only for conduct, but also proficiency in knowing policies, procedures, 
                and the right place or moment to execute. 
           </p>
           <h3>
                What makes our training approach so effective?
            </h3>
           <p>
                It is firmly believed, tried, and tested, that a 
                chain is only as strong as its weakest link. With the training programs offered, there is 
                no shortage of opportunity for growth. A lack of applied tough motivation is not guaranteed. 
           </p>
           
            </div>
           </div>
        </section>
        {/* BOTTOM SECTION GRID */}
    <Grid celled>
        <Grid.Row>
        <Grid.Column width={3}>
            <h2>
                Inquiries
            </h2>
            <hr color='red' className={styles['line-glow']}>
            </hr>
            <p>
                Together, we stand united with our partners in a common goal of increasing revenue.
            </p>
            <Image src='https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg' />
        </Grid.Column>
        <Grid.Column width={10}>
            <Image src='https://www.noobie.com/wp-content/uploads/2021/07/colorful-bar-graph.jpg' />
        </Grid.Column>
        <Grid.Column width={3}>
            <h2>
                Investing
            </h2>
            <hr color='red' className={styles['line-glow']}>
            </hr>
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



{/* <div className={styles["grid-item"]}>
                    <Image src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" />
                    <div className={styles['text-overlay-top-left']}>
                        Mining
                    </div>
                </div>
                <div className={styles['grid-container']}>
                    <div className={styles["grid-item"]}>

                        <Image src="https://twinfinite.net/wp-content/uploads/2021/12/Star-Citizen.jpg" />
                    <div className={styles['text-overlay']}>
                        Salvage
                    </div>
                </div>
            </div> */}