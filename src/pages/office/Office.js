import styles from './office.module.css'
import React, { useState, Component } from 'react'
import AdminWorkflows from './AdminWorkflows'
import Navbar from 'react-bootstrap';
import StepSystem from '../home/StepSystem'
import Sidebar from '../../Components/Sidebar';
import TransactionForm from '../../Components/TransactionForm'
import BgImageAll from '../office/dark_mosaic.png'
import {Image} from 'semantic-ui-react'
import Analytics from './Analytics';
import {Container} from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function Office() {
    const [addWorkflow, setAddWorkflow] = useState(false);
    const [hideSidebar, setHideSidebar] = useState(false);

    return (
        <div className={styles['img-fluid']} >
            <div className={styles.container}>
            
            <Container fluid>
                {/* adapt for analytics */}
                <Button onClick={() => setAddWorkflow(!addWorkflow)}>Enable Workflow Mode</Button>
                {/* <AdminWorkflows /> */}
                { addWorkflow && <AdminWorkflows />}
            </Container>

                
                
            <Container fluid className={styles.sidebar}>
                <Button onClick={() => setAddWorkflow(!addWorkflow)}>Enable Workflow Mode</Button>
            <Sidebar />
            {/* <TransactionForm /> */}
            </Container>
            
            </div>
            
        
        
        {/* Add Meaningful Content HERE */}

        
        
       
        
        </div>


        
    )
}