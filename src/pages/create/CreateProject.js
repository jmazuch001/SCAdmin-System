import React from 'react'
import { useState } from 'react'

import { Icon, Step } from 'semantic-ui-react'
import {Dropdown} from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import {Button, Popup} from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'
import TransactionForm from '../../Components/TransactionForm'
import { Container, Group} from 'semantic-ui-react'


// styles
import styles from './CreateProject.css'


export default function CreateProject() {
    // form fields
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignedUsers, setAssignedUsers] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, details, dueDate)
        
    }

    // const generateProductID = (uniqueID) => {
    //     return Math.floor(Math.random() * uniqueID + activity.key)
    // }

    // function uniqueID() {
    //     if (activity.key == 'Mining & Trade') {
    //         return 'MT' + {}
    //     }
    //     else if (activity.key == 'Mining Only') {
    //         return 'M' + {}
    //     }
    //     else if (activity.key == 'Trade Only') {
    //         return 'T' + {}
    //     }
    //     else if (activity.key == 'Salvage & Trade') {
    //         return 'ST' + {}
    //     }
    //     else if (activity.key == 'Salvage Only') {
    //         return 'S' + {}
    //     }
    // }
    
    // const [jobType, setJobType] = useState('')
    // const [details, setDetails] = useState('')
    // const [dueDate, setDueDate] = useState('')
    // const [category, setCategory] = useState('')
    // const [assignedUsers, setAssignedUsers] = useState('')

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
            key: 'Taranite', 
            text: 'Taranite',
            value: 'Taranite'
          },
          {
            key: 'Borase', 
            text: 'Borase',
            value: 'Borase'
          },
          {
            key: 'Hephaestanite', 
            text: 'Hephaestanite',
            value: 'Hephaestanite'
          },
          {
            key: 'Titanium', 
            text: 'Titanium',
            value: 'Titanium'
          },
          {
            key: 'Diamond', 
            text: 'Diamond',
            value: 'Diamond'
          },
          {
            key: 'Gold', 
            text: 'Gold',
            value: 'Gold'
          },
          {
            key: 'Taranite', 
            text: 'Taranite',
            value: 'Taranite'
          },
        {
          key: 'Inert', 
          text: 'Inert', 
          value: 'Inert', 
        }, 
      ]



    return(
        <div className="create-form">
            <h2 className='page-title'>Create New Workflow</h2>
            <Container>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <span>Job Type:</span>
                    <input
                    required
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                    
                </label>
                <label htmlFor="">
                    <span>Project Details:</span>
                    <input
                    required
                    type='text'
                    onChange={(e) => setDetails(e.target.value)}
                    value={details} />
                    
                </label>
                <label htmlFor="">
                    <span>Set Due Date:</span>
                    <input
                    required
                    type='date'
                    onChange={(e) => setDueDate(e.target.value)}
                    value={dueDate} />
                    
                </label>
                <label>
                    <span>Project Category</span>
                    {/* select single job type from dropdown here */}
                    <Dropdown placeholder='Activity' fluid selection options={activity} 
                    onChange={(e) => setCategory(e.target.value)}
                    value={activity}/>
                </label>
                <label>
                    <span>Designate Product Owner:</span>
                    {/* <Dropdown placeholder='Activity' fluid selection options={activity} /> */}
                    {/* select single user with online status */}
                </label>
                <label>
                    <span>Additional Personnel:</span>
                    {/* <Dropdown placeholder='Select Additional Personnel' fluid multiple selection options={friendOptions} /> */}
                    {/* select multiple users with online status */}
                </label>
                <button className="btn">Add Project</button>
            </Form>
            </Container>
            
        </div>
    )
}
