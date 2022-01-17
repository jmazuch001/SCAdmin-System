import React from 'react'
import styles from './CreateProject.css'
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
import CreateProject from './CreateProject'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom'


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

export default function FirstStage() {
  const history = useHistory()
  // map through the documents and put into new array of users
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])
  
  // person who created project can save info about it in the db
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore('lifecycles')

  // multi-page form setup
  const [page, setPage] = useState(1);

  // form fields
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)
  useEffect(() => {
      if(documents) {
          const options = documents.map(user => {
              return { value: user, label: user.displayName}
          })
          setUsers(options)
      }
  }, [documents])
  
  const handleSubmit = async (e) => {
      e.preventDefault()
      setFormError(null)

      // perform checks
      if(!category) {
        setFormError('Please select a category')
        return
      }
      if (assignedUsers.length < 1) {
        setFormError('Please assign the project to at least one user')
        return
      }

      const createdBy = {
        displayName: user.displayName, 
        id: user.uid
      }

      // this is what we're saving to the db
      // assigneduserslist is an array of objects where each object represents a user
      // who the project is assigned to
      const assignedUsersList = assignedUsers.map((u) => {
        return {
          displayName: u.value.displayName, 
          id: u.value.id
        }
        
      })

      // this is the object we're saving to the database as a doc
      const project = {
        name, 
        details,
        category: category.value, 
        dueDate: timestamp.fromDate(new Date(dueDate)), 
        comments: [], 
        createdBy, 
        assignedUsersList
      }

      await addDocument(project)
      if (!response.error) {
        // redirects to home page once complete and without error
        history.push('/Dashboard')
      }
      
  }








    return (

          <div className="create-form">
            <div>
            <h2 className='page-title'>Create New Workflow</h2>
            </div>
            
           
            
            
            <Form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <span>Job Type:</span>
                    <input required type='text'onChange={(e) => setName(e.target.value)} value={name} />
                    
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
                {formError && <p className='error'>{formError}</p>}
            </Form>
            
            
            
        </div>
          

    )
}

