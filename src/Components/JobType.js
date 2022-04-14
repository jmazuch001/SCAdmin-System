import React, { useState, useEffect } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'
import { useHistory } from 'react-router-dom' 
import {Link} from 'react-router-dom'



import Select from 'react-select'
import { Form, Checkbox, Button, Modal, Header, Step, Icon, Dropdown, Container, Grid, Table, Inpu, Progress, Divider, Label, Segment } from 'semantic-ui-react'


// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function AccessControl({ project }) {
  const { addDocument, response } = useFirestore('employee-profiles')
  const history = useHistory()
  const { documents } = useCollection('users')
  const [formError, setFormError] = useState(null)
  const [job, setJob] = useState('');
  const { user } = useAuthContext()
  const [users, setUsers] = useState([])
  const [assignedUsers, setAssignedUsers] = useState([])
const JobType = [
  {
    value: 'Salvage', 
    label: 'Salvage'
  }, 
  {
    value: 'Mining', 
    label: 'Mining'
  }, 
  {
    value: 'Trade', 
    label: 'Trade'
  }

]    

const assignedUsersList = assignedUsers.map((u) => {
    return {
      displayName: u.value.displayName, 
      id: u.value.id
    }
    
  })

useEffect(() => {
    if(documents) {
        const options = documents.map(user => {
            return { value: user, label: user.displayName}
        })
        setUsers(options)
    }
}, [documents])


const handleFormSubmit = async (e) => {
  e.preventDefault()

  const formFields = {
      job, 
      id: CreateID(), 
  }

    // perform checks
    if(!JobType) {
      setFormError('Please select a category')
      return
    }
    if (JobType.length < 1) {
      setFormError('Please assign the project to at least one user')
      return
    }

    await addDocument(project) 
        if (!response.error) {
            // redirects to home page once complete and without error
            history.push('/Dashboard')
          }

        
    if (!response.error) {
        setJob('');
    }

    // supporting functions
    function CreateID () {
      return "MT" + Math.floor(Math.random() * 1000); 
   }



}

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
            <Container >
              <div>
                <span>Job Type: </span>
                <Select onChange={(e) => setJob(e)} options={JobType} />
                  
              </div>
            </Container>
            <button className="btn">Stage Project</button>
            {formError && <p className='error'>{formError}</p>}
            </Form>
        </div>
        
    )
}




