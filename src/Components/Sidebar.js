import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import CreateProject from '../pages/create/CreateProject';
import OnlineUsers from './OnlineUsers';
import styles from './Sidebar.module.css'
import Container from '@mui/material/Container'
import { useAuthContext } from '../hooks/useAuthContext'
import { AppBar, Drawer, Typography, List, ListItem } from '@mui/material';

export default function SideNav () {
  const { user } = useAuthContext()
  return (
    // <div className={styles.sidebar}>
    //   <div className={styles['sidebar-content']}>
    //     <div className={styles.user}>
    //       <p>Hey {user.displayName}</p>  
    //     </div>  
    //     <nav className={styles.links}>
    //       <ul>
    //         <li>
    //           <NavLink exact to="/">
    //             <span>Home</span>
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/CreateProject">
    //             <span>New Project</span>
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to='/Dashboard'>
    //             <span>Dashboard</span>
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to='/Reporting'>
    //             <span>Reporting</span>
    //           </NavLink>
    //         </li>
    //       </ul>
          
    //     </nav>
    //   </div>
    // </div>
    <div>
      <Drawer 
      variant="temporary"
      open={true}
      >
        <Typography variant="h6" noWrap>
          <p>Hey {user.displayName}</p>
        </Typography>
        <List>
          {[
            { text: "Home", route:"/"}, 
            { text: "Create Project", route:"/CreateProject"}, 
            { text: "Dashboard", route:"/Dashboard"}, 
            { text: "Reporting", route:"/Reporting"}
          ].map((sidenav, list) => (
            <ListItem key={sidenav.text}><Link to={sidenav.route}>{sidenav.text}</Link></ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}


