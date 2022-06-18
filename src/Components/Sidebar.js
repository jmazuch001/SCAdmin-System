import React, {useState} from 'react'
import {Drawer, ListItem, ListItemIcon, ListItemText, List} from '@material-ui/core';
import styles from './Sidebar.module.css'
import Container from '@mui/material/Container';
import {makeStyles} from '@material-ui/core/styles'
import WorkIcon from '@material-ui/icons/Work';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ListIcon from '@material-ui/icons/List';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PortraitIcon from '@material-ui/icons/Portrait';
import LockIcon from '@material-ui/icons/Lock';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import Button from 'react-bootstrap'
import Checkbox from '@mui/material/Checkbox';
import { withRouter } from 'react-router-dom';
import AccessControl from '../pages/office/AccessControl';
import { Paper } from '@mui/material';
import OnlineUsers from './OnlineUsers';
import {Menu, Item} from 'semantic-ui-react'


const drawerHeight = 300

const useStyles = makeStyles({
    Drawer: {
        width: "150px", 
        boxSizing: 'border-box', 
        height: drawerHeight, 
        position: 'absolute'
    },
    paper: {
        position: 'absolute'
    }, 
    root: {
        position: 'absolute'
    }
});

function Sidebar(props) {
const { history } = props;
const classes = useStyles();
const itemsList = [
    // { 
    //     text: 'QR Generator', 
    //     icon: <GraphicEqIcon />
    //     onClick: () => history.push('/Office'),
    // },
    {
        text: 'Workflows',
        icon: <WorkIcon />, 
        onClick: () => history.push('/Office'), 
        
        
    }, 
    { 
        text: 'User Profiles', 
        icon: <GraphicEqIcon />,
        onClick: () => history.push('/UserProfiles')
    },
    {
        text: 'Dashboard', 
        icon: <ListIcon />,
        onClick: () => history.push('/Dashboard')
    }, 
    {
        text: 'Analytics', 
        icon: <InsertChartIcon />,
        onClick: () => history.push('/Analytics')
    }, 
    {
        text: 'Badging', 
        icon: <PortraitIcon />
    },
    {
        text: 'Access Controls', 
        icon:  <LockIcon />, 
        onClick: () => history.push('/AccessControl')
    }, 
    { 
        text: 'Reporting', 
        icon:  <AssessmentIcon />, 
        onClick: () => history.push('/Reporting')
    },
    { 
        text: 'Finances', 
        icon: <AccountBalanceIcon />

    }, 
    { 
        text: 'QR Generator', 
        icon: <GraphicEqIcon />
    },
    { 
        text: 'Test Page', 
        icon: <GraphicEqIcon />,
        onClick: () => history.push('/TestPage')
    }
];

    return (
        <div>
            <Drawer variant="permanent" className={classes.Drawer}>
            <Container className={styles['side-container']}>
                Powered by AntonWare
            </Container>
            <div>
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                           
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text}>
                                
                            </ListItemText>
                        </ListItem>
                    )
                })}
            </List>
            </div>
            <Menu vertical>
                <OnlineUsers />
            </Menu>
            
        </Drawer>
        </div>
        
    )
}

export default withRouter(Sidebar);