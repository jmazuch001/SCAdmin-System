import React from 'react'
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

export default function FourthStage() {
    return (
    <Step.Group> 
    <Step>
    <Icon name='truck' />
        <Step.Content>
          <Step.Title>Delivery Confirmation</Step.Title>
          <Step.Description>Outline Bill of Sale</Step.Description>
        </Step.Content>
    </Step>
    </Step.Group>   

    )
}

