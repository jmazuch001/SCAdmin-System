import React from 'react'
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'
import BadgeDesigner from './BadgeDesigner'
import styles from './reporting.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Sidebar from '../../Components/Sidebar';
import TransactionForm from '../../Components/TransactionForm'
import AdminWorkflows from './AdminWorkflows'
import { useAuthContext } from '../../hooks/useAuthContext'




export default function Reporting() {
    const { user } = useAuthContext()

    return (
        <div className={styles['img-fluid']} >
            <div className={styles.container}>
            <div class='grid-item'>
                <Sidebar />
                
            <div className={styles.sidebar}>
              {/* fetching user data within this div */}
            <grid>
            <TransactionForm uid={user.uid}/>
            
            </grid>
            
            </div>
            
            </div>
            
                
            </div>
            
            </div>
        
    )
}

