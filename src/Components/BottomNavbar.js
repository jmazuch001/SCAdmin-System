import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import StepSystem from '../pages/home/StepSystem'
import { Divider, Image, Segment, Item, Grid, Rail } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'



// styles
import styles from './BottomNavbar.module.css'

const panes = [
    { menuItem: "Tab 1", render: () => <Tab.Pane>Top Members</Tab.Pane> },
    { menuItem: "Tab 2", render: () => <Tab.Pane>Filler COntent</Tab.Pane> },
    { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
  ];

export default function BottomNavbar() {



    return (
        <div>
            <header>
                <div className={styles.platform}>
                    <section>
                            
                            {/* <hr className={styles.pline} width='max-width'></hr> */}
                            <nav>
                            {/* <Tab panes={panes} defaultActiveIndex={0} className={styles.tabNav} /> */}
                            </nav>
                            {/* <Tab panes={panes} /> */}
                    </section>
                </div>
            </header>
        
        </div>
        
    ) 
}

