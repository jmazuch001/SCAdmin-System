import React from 'react'
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'
import BadgeDesigner from './BadgeDesigner'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TransactionForm from '../../Components/TransactionForm';
import Project from '../data pages/Project';
import FirstStage from '../create/FirstStage'
import CreateProfile from '../create/CreateProfile';


// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function AccessControl() {
    

    return (
        <div>
            <CreateProfile />

        </div>
        
    )
}

