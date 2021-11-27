import React from 'react'
import {Link} from 'react-router-dom'
// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div>
        <nav className={styles.navbar}>
        
            <ul>
                
                <li className={styles.title}>HIGROUP, LLC.</li>   
                <li><Link to="/login" className={styles['link-text']}>Login</Link></li>
                <li><Link to="/signup" className={styles['link-text']}>Signup</Link></li>   
                
            </ul>
            
        </nav>
        </div>
    ) 
}

