import React from 'react'
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'
import BadgeDesigner from './BadgeDesigner'
import styles from './inventory.module.css'
import Sidebar from '../../Components/Sidebar';
import TransactionForm from '../../Components/TransactionForm'
import AdminWorkflows from './AdminWorkflows'
import { useAuthContext } from '../../hooks/useAuthContext'
import InventoryTable from '../../Components/InventoryTable'
import Dashboard from '../dashboard/Dashboard'



export default function Inventory() {
    const { user } = useAuthContext()

    return (
        <div className={styles['img-fluid']} >
            
            <div className={styles.container}>
            <div >
                {/* <Sidebar /> */}
                <Dashboard />
                
            <div className={styles.sidebar}>
              {/* fetching user data within this div */}
            {/* <InventoryTable uid={user.uid}/> */}
            
            </div>
            
            </div>
                
            </div>
            </div>
        
    )
}

