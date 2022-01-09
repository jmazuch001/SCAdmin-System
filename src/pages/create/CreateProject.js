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
import { Step, Content, Icon, Title, Description, Tab, Pane } from 'semantic-ui-react'

// styles
import styles from './CreateProject.css'

const activity = [
    {
      value: 'mining & trade', 
      label: 'Mining & Trade'
    }, 
    {
      value: 'mining only',
      label: 'Mining Only'
    }, 
    {
      value: 'trade only',
      label: 'Trade Only'
    }, 
    {
      value: 'salvage & trade',
      label: 'Salvage & Trade'
    }, 
    {
      value: 'salvage only', 
      label: 'Salvage Only' 
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

export default function CreateProject() {
    // map through the documents and put into new array of users
    const { documents } = useCollection('users')
    const [users, setUsers] = useState([])

    const panes = [
      { menuItem: 'Tab 1', render: () => <Tab.Pane >Tab 3</Tab.Pane> },
      { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    // form fields
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignedUsers, setAssignedUsers] = useState([])

    useEffect(() => {
        if(documents) {
            const options = documents.map(user => {
                return { value: user, label: user.displayName}
            })
            setUsers(options)
        }
    }, [documents])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, details, dueDate, category)
        
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

    



    return(
        <div className="create-form">
            <div>
            <h2 className='page-title'>Create New Workflow</h2>
            </div>
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
                    <Select 
                        onChange={(option) => setCategory(option)}
                        options={activity}
                    />
                    {/* <Dropdown placeholder='Activity' fluid selection options={activity}/> */}
                </label>
                <label>
                    <span>Designate Product Owner:</span>
                    {/* <Dropdown placeholder='Activity' fluid selection options={activity} /> */}
                    {/* select single user with online status */}
                    <Select 
                        onChange={(option) => setAssignedUsers(option)}
                    options={users}
                    />
                </label>
                <label>
                    <span>Additional Personnel:</span>
                    <Select 
                        onChange={(option) => setAssignedUsers(option)}
                    options={users}
                    isMulti
                    />
                </label>
                <button className="btn">Add Project</button>
            </Form>
            </Container>
            
        </div>
    )
}
