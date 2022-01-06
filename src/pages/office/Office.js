import styles from './office.module.css'
import React, { useState, Component } from 'react'
import AdminWorkflows from './AdminWorkflows'
import Navbar from 'react-bootstrap';
import StepSystem from '../home/StepSystem'
import Container from '@mui/material/Container'
import Sidebar from '../../Components/Sidebar';
import TransactionForm from '../../Components/TransactionForm'
import BgImageAll from '../office/dark_mosaic.png'
import {Image} from 'semantic-ui-react'

export default function Office() {
    return (
        <div className={styles['img-fluid']} >
            <div className={styles.container}>
            <div >
                <Sidebar />
                
            <div className={styles.sidebar}>
    
            {/* <TransactionForm /> */}
            </div>
            
            </div>
            
        </div>
        <Container >
        <AdminWorkflows />
        
        
        </Container>
        
        </div>


        
    )
}