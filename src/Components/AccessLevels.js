import React from 'react'
import styles from '../Components/TradeDetailsForm.module.css'
import { useState, useEffect } from 'react'

import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'
import { useHistory } from 'react-router-dom' 

// component library references
import { Form, Button, Step, Icon, Dropdown, Container, Grid, Table, Input, Image } from 'semantic-ui-react'
import Select from 'react-select'

export default function TradeDetailsForm( { project }) {
const [page, setPage] = useState(1);
const [location, setLocation] = useState('');
const [destination, setDestination] = useState('');




  return (
    <Form  className='project-details'>
        <div>
            <Container>
        <Grid relaxed columns={4}>
            <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
        </Grid>
        </Container>
        </div>

    </Form>
  )
}