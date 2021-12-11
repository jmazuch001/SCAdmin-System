import styles from './office.module.css'
import React, { useState, Component } from 'react'
import AdminWorkflows from './AdminWorkflows'
import Navbar from 'react-bootstrap';
import AccessControl from './AccessControl';

export default function Office() {
    return (
        
        <div>
            
            <AdminWorkflows />
        </div>
    )
}