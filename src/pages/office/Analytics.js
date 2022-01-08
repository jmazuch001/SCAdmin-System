import React, {useState, Component} from 'react';
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'
import BadgeDesigner from './BadgeDesigner'
import styles from './analytics.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Sidebar from '../../Components/Sidebar';
import TransactionForm from '../../Components/TransactionForm'
import { Button, Checkbox, Icon, Table, Header, Image, Grid, Divider, Form, Segment, Item } from 'semantic-ui-react'

import AdminWorkflows from './AdminWorkflows'

// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function Analytics() {
    const [addWorkflow, setAddWorkflow] = useState(false);


    return (
        <div className={styles['img-fluid']} >
            <div className={styles.container}>
            <div >
                <Sidebar />

                <div>
                {/* <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                />

                        <Button content='Login' primary />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Button content='Sign up' icon='signup' size='big' />
                    </Grid.Column>
                    </Grid>

                    <Divider vertical>Or</Divider>
                </Segment> */}

                <Segment color='black' inverted>
      <Grid columns={2} relaxed="very">
        <Grid.Column  >
            <Item >
            <h1>Add a Workflow</h1>
                
            </Item>
          
        </Grid.Column>
        <Grid.Column className={styles.gridColumn}>
          <h1>Review Charts</h1>
          <Container>
                <Button slider onClick={() => setAddWorkflow(!addWorkflow)}>Enable Workflow Mode</Button>
                {/* <AdminWorkflows /> */}
                { addWorkflow && <AdminWorkflows />}
                </Container>
          
        </Grid.Column>
      </Grid>
      </Segment>
  </div>
                
            <div className={styles.sidebar}>
    
            {/* <TransactionForm /> */}
            
            
            </div>
            
            </div>
            
                
                
               
                
            
            </div>
            
            </div>
            
        
    )
}

