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
import { useCollection } from '../../hooks/useCollection'
import { Grid, Image, Table, Header, GridRow, Cell } from 'semantic-ui-react'
import Dashboard from '../dashboard/Dashboard'
import TransactionReportList from './TransactionReportList'



export default function Reporting() {
    const { user } = useAuthContext()
    const { documents, error} = useCollection('reports')
    return (
        
        <div className={styles['img-fluid']} >
            <Sidebar />
            <div className={styles.container}>
            <div class='grid-item'>
                
                
            <div className={styles.sidebar}>
              {/* fetching user data within this div */}
              {error && <p>{error}</p>}
              {documents && <TransactionReportList transactions={documents}/>}
            <grid>
            <TransactionForm uid={user.uid}/>
            
            </grid>
            

            {/* <Container>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column >
                        <Dashboard />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container> */}
            </div>
            
            </div>
            
                
            </div>
            
            </div>
        
    )
}

