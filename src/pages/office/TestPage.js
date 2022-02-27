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
import MiningAndTradeDetailsForm from '../../Components/MiningAndTradeDetailsForm';
import { Table } from 'semantic-ui-react'


// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function AccessControl({project}) {
    

    return (
        <div>
            <ul>
                    {project.additionalDetails.length > 0 && project.additionalDetails.map(nextPageDetails => (
                      <li key={nextPageDetails.id}>
                        <div className="detail-author">
                          <p>Added By: {nextPageDetails.displayName}</p>
                        </div>
                        <div className="detail-date">
                      <p>Created on {nextPageDetails.createdAt.toDate().toDateString()}</p>
                        </div>
                        <div className="detail-content">
                          {/* <p>{detail.content}</p> */}
                          <Table celled>
                                <Table.Header>
                                  <Table.Row>
                                    <Table.HeaderCell>Location{nextPageDetails.location}</Table.HeaderCell>
                                    <Table.HeaderCell>Destination{nextPageDetails.destination}</Table.HeaderCell>
                                    <Table.HeaderCell>Created At:{nextPageDetails.createdAt.toDate().toDateString()}</Table.HeaderCell>


                                  </Table.Row>
                                </Table.Header>
                                </Table>
                        </div>
                      </li>
                    ))}
                    
                  </ul>
            <MiningAndTradeDetailsForm />
        </div>
        
    )
}




