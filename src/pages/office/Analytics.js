import React from 'react'
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'
import BadgeDesigner from './BadgeDesigner'
import styles from './analytics.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Sidebar from '../../Components/Sidebar';
import TransactionForm from '../../Components/TransactionForm'

// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function Analytics() {
    

    return (
        <div className={styles['img-fluid']} >
            <div className={styles.container}>
            <div >
                <Sidebar />
                
            <div className={styles.sidebar}>
    
            {/* <TransactionForm /> */}
            
            </div>
            
            </div>
            </div>
            
            </div>
        
    )
}

