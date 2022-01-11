import React from 'react'
import styles from '../create/Stages.module.css'
import { useState, useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import {Dropdown} from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import {Button, Popup} from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'
import TransactionForm from '../../Components/TransactionForm'
import { Container, Group} from 'semantic-ui-react'
import Select from 'react-select'
import { Step, Content, Icon, Title, Description, Tab, Pane, Image } from 'semantic-ui-react'

export default function FirstStage() {
    return (
      <Container className={styles['stages-animation']}>
    <Step.Group attached > 
    <Step>
    <Icon  />
        <Step.Content>
          <Step.Title><h1>Start Your Next Job</h1></Step.Title>
          
        </Step.Content>
    </Step>
    </Step.Group>   
</Container>
    )
}

