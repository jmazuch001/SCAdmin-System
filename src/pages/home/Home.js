import styles from './home.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import TransactionForm from './TransactionForm'
import StepSystem from './StepSystem'



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
                </div> 

            
        </div>
    )
}

