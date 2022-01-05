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
    {
        text: 'Workflows',
        icon: <WorkIcon />, 
        onClick: () => history.push('/Office')
        
    }, 
    {
        text: 'Inventory', 
        icon: <ListIcon />
    }, 
    {
        text: 'Analytics', 
        icon: <InsertChartIcon />
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
    },
    { 
        text: 'Finances', 
        icon: <AccountBalanceIcon />

    }, 
    { 
        text: 'QR Generator', 
        icon: <GraphicEqIcon />
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
        </Drawer>
        </div>
        
    )
}

export default withRouter(Sidebar);