import React from 'react'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Sidebar from './Sidebar'


// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()


    return (
        <div>
        <nav className={styles.navbar}>
        
            <ul>
                
                <li className={styles.title}>HIGROUP, LLC.</li>   
                
                {!user && (
                    <>
                        <li><Link to="/login" className={styles['link-text']}>Login</Link></li>
                        <li><Link to="/signup" className={styles['link-text']}>Signup</Link></li>   
                        
                    </>
                )}

                {user && (
                    <>
                        <li>Hello, {user.displayName}</li>
                        <li><Link to="/AccessControl" className={styles['link-text']}>QR Code Generator</Link></li>
                        <li><Link to="/office" className={styles['link-text']}>Office</Link></li>
                        <li><button className="logout-btn" onClick={logout}>Logout</button></li>
                    </>
                )}
            </ul>
            
        </nav>
        <div>
            <Sidebar/>
        </div>
        </div>
        
    ) 
}

