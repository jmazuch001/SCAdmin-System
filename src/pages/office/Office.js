import styles from './office.module.css'
import React, { useState, Component } from 'react'
import AdminWorkflows from './AdminWorkflows'
import Navbar from 'react-bootstrap';
import TransactionForm from '../home/TransactionForm'
import StepSystem from '../home/StepSystem'
import Container from '@mui/material/Container'
import Sidebar from '../../Components/Sidebar';

export default function Office() {
    return (
        
        <div>
            <Container>
                <Sidebar />
            </Container>
            {/* <TransactionForm />
            <StepSystem /> */}
        </div>
    )
}