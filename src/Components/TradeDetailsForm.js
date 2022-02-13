import React from 'react'
import styles from '../Components/TradeDetailsForm.module.css'
import { useState, useEffect } from 'react'

import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'
import { useHistory } from 'react-router-dom' 

// component library references
import { Form, Button, Step, Icon, Dropdown, Container, Grid, Table, Input } from 'semantic-ui-react'
import Select from 'react-select'

export default function TradeDetailsForm( { project }) {
const [page, setPage] = useState(1);
const [location, setLocation] = useState('');
const [destination, setDestination] = useState('');

const refineryLocations = [
  {
    value: 'ARC-L1 Wide Forest Station', 
    label: 'ARC-L1 Wide Forest Station'
  },
  {
    value: 'CRU-L1 Ambitious Dream Station', 
    label: 'CRU-L1 Ambitious Dream Station'
  },
  {
    value: 'HUR-L1 Green Glade Station', 
    label: 'HUR-L1 Green Glade Station'
  },
  {
    value: 'HUR-L2 Faithful Dream Station', 
    label: 'HUR-L2 Faithful Dream Station'
  },
  {
    value: 'MIC-L1 Shallow Frontier Station', 
    label: 'MIC-L1 Shallow Frontier Station'
  },
]

const tradingDestinations = [
  {
    value: 'Hurston - Lorville', 
    label: 'Hurston - Lorville'
  },
  {
    value: 'Cursader - Port Olisar', 
    label: 'Cursader - Port Olisar'
  },
  {
    value: 'Crusader - Orison', 
    label: 'Crusader - Orison'
  },
  {
    value: 'ArcCorp - Area 18', 
    label: 'ArcCorp - Area 18'
  },
  {
    value: 'Crusader - Grim Hex', 
    label: 'Crusader - Grim Hex'
  },
]


  return (
    <Form  className='project-details'>
    <div >
       <div className='progressbar'></div> 
       <div className='details-container'>
           <div>
             <label>
                <span>Select Cargo Location</span>
                  <Select 
                    onChange={(e) => setLocation(e)} options={refineryLocations} 
                  />
              </label>
              <label>
                <span>Select Cargo Destination</span>
                  <Select 
                    onChange={(e) => setDestination(e)} options={tradingDestinations} 
                  />
              </label>
              </div>
               <Button>Previous</Button>
               <Button>Next</Button>
               <p>This is a P-TAG</p>
           
       </div>
    </div>
    </Form>
  )
}