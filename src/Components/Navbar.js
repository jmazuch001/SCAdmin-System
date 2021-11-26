import React from 'react'
import {Link} from 'react-router-dom'
// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        
        <nav className={styles.Navbar}>
            <ul>
                <li className={styles.title}>Financial Reporting</li>   
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/login">Signup</Link></li>   
            </ul>
        </nav>
        
    ) 
}

