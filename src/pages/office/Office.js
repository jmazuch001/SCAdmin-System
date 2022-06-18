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
import { Button, Tab } from 'semantic-ui-react'
import OnlineUsers from '../../Components/OnlineUsers';
import CreateProject from '../create/CreateProject';
import CreateProfile from '../create/CreateProfile';



export default function Office() {
    const [addWorkflow, setAddWorkflow] = useState(false);
    const [hideSidebar, setHideSidebar] = useState(false);

    

    return (
        <div className={styles['img-fluid']} >
            <div className={styles.container}>
            <div>
                <Sidebar />
                <div className="tab-bg-props">
                
                <CreateProject />
                
                </div>
                
            </div>
            
                    
            </div>
            
        
        
        {/* Add Meaningful Content HERE */}

        
        
       
        
        </div>


        
    )
}


{/* <Container fluid>               
    <Button onClick={() => setAddWorkflow(!addWorkflow)}>Enable Workflow Mode</Button>               
    { addWorkflow && <AdminWorkflows /> }                
</Container> */}