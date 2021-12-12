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

// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function AccessControl() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div>
            <Container className="business-card">
            <Card className="business-card" sx={{ maxWidth: 445 }}>
                <CardMedia
                    component="img"
                  
                    image="https://avatars.githubusercontent.com/u/36649122?v=4"
                    alt="green iguana"
                />
                <QR_Code text='https://jmazuch001.github.io/Website/'>
                    This is a link to my portfolio site. Please browse and reach out!
                </QR_Code>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                    Software Engineer
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>Security</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>Manufacturing</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>Development</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>Quality Assurance</Item>
                        </Grid>
                        </Grid>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Container>
        </div>
    )
}

