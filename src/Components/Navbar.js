import React from 'react'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    const { logout } = useLogout()

    return (
        <div>
        <nav className={styles.navbar}>
        
            <ul>
                
                <li className={styles.title}>HIGROUP, LLC.</li>   
                <li><Link to="/login" className={styles['link-text']}>Login</Link></li>
                <li><Link to="/signup" className={styles['link-text']}>Signup</Link></li>   
                <li><Link to="/AccessControl" className={styles['link-text']}>QR Code Generator</Link></li>
                <li><Link to="/office" className={styles['link-text']}>Office</Link></li>
                <li><button className="logout-btn" onClick={logout}>Logout</button></li>
            </ul>
            
        </nav>
        </div>
    ) 
}

