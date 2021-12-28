import styles from './home.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import TransactionForm from './TransactionForm'
import StepSystem from './StepSystem'
import Workflows from '../../Components/Workflows'
import AdminWorkflows from '../office/AdminWorkflows'



export default function Home() {
    return (
        <div className={styles.container}>
            
            <div>
                <StepSystem />
            </div>
            <div className={styles.content}>
                Transaction List
            </div>
            <div className={styles.sidebar}>
                <TransactionForm />
            </div> 
            <div>
                <AdminWorkflows />
            </div> 

            
        </div>
    )
}

