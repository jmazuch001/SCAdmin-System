import React from 'react'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'



// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()


    return (
        <div>
        <nav className={styles.navbar}>
        <ul><Link to="/"  className={styles.title}>Hellstrom Investment Group, LLC.</Link></ul> 
            <ul>
                
                  
                
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
                        <li><Link to="/" className={styles['link-text']}>Home</Link></li>
                        <li>
                            {!isPending && <button className="logout-btn" onClick={logout}>Logout</button>}
                            {isPending && <button className="logout-btn" disabled>Logging out...</button>}
                        </li>
                    </>
                )}
            </ul>
            
        </nav>
        
        </div>
        
    ) 
}

