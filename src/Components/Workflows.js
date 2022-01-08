import React, { useState, Component} from 'react'
import {Link} from 'react-router-dom'
// styles
import styles from './Workflows.module.css'
// import Navbar from 'react-bootstrap';

import { Icon, Step } from 'semantic-ui-react'
import {Dropdown} from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import {Button, Popup} from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'

import { Container, Group } from 'semantic-ui-react'

// user online object must be created
// insert into const friend Options
// for each user with status online / active, display in array for 
// dropdown

export default function AdminWorkflows() {

  
    const activity = [
        {
          key: 'Mining & Trade', 
          text: 'Mining & Trade',
          value: 'Mining & Trade'
        }, 
        {
          key: 'Mining Only', 
          text: 'Mining Only',
          value: 'Mining Only'
        }, 
        {
          key: 'Trade Only', 
          text: 'Trade Only',
          value: 'Trade Only'
        }, 
        {
          key: 'Salvage & Trade', 
          text: 'Salvage & Trade',
          value: 'Salvage & Trade'
        }, 
        {
          key: 'Salvage Only', 
          text: 'Salvage Only', 
          value: 'Salvage Only' 
        }, 
      ]
      
      const minerals = [
        {
          key: 'Quantanium', 
          text: 'Quantanium', 
          value: 'Quantanium' 
        }, 
        {
          key: 'Agrecium', 
          text: 'Agrecium',
          value: 'Agrecium'
        }, 
        {
          key: 'Laranite', 
          text: 'Laranite',
          value: 'Laranite'
        }, 
        {
          key: 'Bexalite', 
          text: 'Bexalite',
          value: 'Bexalite'
        }, 
        {
          key: 'Inert', 
          text: 'Inert', 
          value: 'Inert', 
        }, 
      ]
      
      const friendOptions = [
        {
          key: 'Jenny Hess',
          text: 'Jenny Hess',
          value: 'pilot',
        //   image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
        }, 
        {
          key: 'Christian',
          text: 'Christian',
          value: 'Christian',
        //   image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
        },
        {
          key: 'Matt',
          text: 'Matt',
          value: 'Matt',
        //   image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
        },
        {
          key: 'Justen Kitsune',
          text: 'Justen Kitsune',
          value: 'Justen Kitsune',
        //   image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
        }
      ]
      
      const shippingRoutes = [
        {
          key: 'CRU-L1',
          text: 'CRU-L1',
          value: 'CRU-L1',
        //   image: { avatar: true, src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffleetyards.net%2Fstations%2Fcru-l1-ambitious-dream-station%2F&psig=AOvVaw2FtkNi_OuQTqYVW0Dcxo-n&ust=1640720471178000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICRrJnehPUCFQAAAAAdAAAAABAD' },
        },
        {
          key: 'Hurston: Lorville',
          text: 'Hurston: Lorville',
          value: 'Hurston: Lorville',
        //   image: { avatar: true, src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hasgaha.com%2Fbwg_gallery%2Fstar-citizen-alpha-3-4%2F&psig=AOvVaw0iGquipk5yQHr0t-wm8JIX&ust=1640720411239000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjGmIvehPUCFQAAAAAdAAAAABAJ' },
        },
      ]
    
    return (
        
    
        <Step.Group vertical className={styles.workContainer}>
    
    <Step active>
      <Icon name='suitcase' />
      <Step.Content>
      <Step.Title>Select Activity
      <Dropdown placeholder='Activity' fluid selection options={activity} /> 
      </Step.Title>
      <Step.Description>
        Select Primary Leader
        <Dropdown placeholder='Select Merchant / Pilot' fluid selection options={friendOptions} />  
        
        </Step.Description>
        <Step.Description>Select Additional Personnel
        <Dropdown placeholder='Select Additional Personnel' fluid multiple selection options={friendOptions} />
        <Button>Confirm</Button>
          </Step.Description>
      </Step.Content>
    </Step>


{/* REFINEMENT */}
    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Refinement</Step.Title>
        <Step.Description>Enter Refinement Manifest</Step.Description>
        <Dropdown placeholder='Select Minerals' fluid multiple selection options={minerals} />
        <Button>Submit Manifest</Button>
        <Form>
    <Form.Field>
      <label>Enter Processing Duration (in hours)</label>
      <input />
      <Button>Start Tracking</Button>
    </Form.Field>
  </Form>
      </Step.Content>
    </Step>

{/* SHIPPING ROUTES */}
    <Step active>
      <Icon name='shipping' />
      <Step.Content>
        <Step.Title>Delivery Pending</Step.Title>
        <Step.Description>Enter Shipping Information</Step.Description>
        From:
        <Dropdown placeholder='Select Merchant / Pilot' fluid selection options={shippingRoutes} />
        To:
        <Dropdown placeholder='Select Merchant / Pilot' fluid selection options={shippingRoutes} />
      </Step.Content>
    </Step>

  {/* DELIVERY PENDING */}
    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Delivery Pending</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Button>Complete Transaction</Button>
        {/* insert timer */}
      </Step.Content>
    </Step>
    
    {/* MODAL FOR ENTERING TRANSACTION AMOUNT */}
   {/* SEE OFFICE PAGE  */}
  </Step.Group>
  
 
    ) 
}















// system will retrieve login status and add to pool of available users for participation
// admin / user will be able to select person from dropdown
// person is added to workflow for the lifecycle
// once lifecycle is complete, amounts are automatically calculated 
// user is prompted for contribution amount, which is then added to total in account

