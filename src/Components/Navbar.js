import React from 'react'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'



// styles
import styles from './Navbar.module.css'
import { AppBar, Drawer, Toolbar, Typography } from '@mui/material'
import { List, ListItem } from 'semantic-ui-react'
import Home from '../pages/home/Home'

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
                        {/* <li><Link to="/AccessControl" className={styles['link-text']}>QR Code Generator</Link></li> */}
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
        {/* <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Advanced Material UI Styling is here
                    </Typography>
                    
                </Toolbar>   
            </AppBar>
            <Drawer
                variant='temporary'
                open={true}
            >
                <List>
                    {[{ text: "Home", route: "/"}, { text: "Contact Card Grid"}].map((nav, items) => (
                        <ListItem key={nav.text}><Link to={nav.route}>{nav.text}</Link></ListItem>
                    ))}
                </List>
            </Drawer>
            <main>
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                </Routes>
            </main>
        </div> */}
        </div>
        
    ) 
}

