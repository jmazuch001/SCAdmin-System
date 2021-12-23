import styles from './home.module.css'
import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'


export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                Transaction List
            </div>
            <div className={styles.sidebar}>
                Transaction Form
            </div> 
            
        </div>
    )
}

