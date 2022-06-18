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
  const { addDocument, response } = useFirestore('user-profiles')
  const history = useHistory()
  const { documents } = useCollection('users')
  const [formError, setFormError] = useState(null)
  const [job, setJob] = useState('');
  const [position, setPositionTitle] = useState('');
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
  }, 
  {
    value: 'Data Running', 
    label: 'Data Running'
  },
  {
    value: 'Construction', 
    label: 'Construction'
  },
  {
    value: 'Pathfinder', 
    label: 'Pathfinder'
  },
  {
    value: 'Assault', 
    label: 'Assault'
  },
  {
    value: 'Air Traffic Control', 
    label: 'Air Traffic Control'
  },
  {
    value: 'Security', 
    label: 'Security'
  },
  {
    value: 'Access Controls', 
    label: 'Access Controls'
  },
  {
    value: 'Intelligence', 
    label: 'Intelligence'
  },
  {
    value: 'Safety', 
    label: 'Safety'
  },
  {
    value: 'Engineer', 
    label: 'Engineer'
  },
  {
    value: 'Project Manager', 
    label: 'Project Manager'
  },
  {
    value: 'CAD Drafter', 
    label: 'CAD Drafter'
  },
  {
    value: 'Repair / Refit', 
    label: 'Repair / Refit'
  },
  {
    value: 'Refueling', 
    label: 'Refueling'
  },
  {
    value: 'Refinement', 
    label: 'Refinement'
  },
  {
    value: 'Research & Development', 
    label: 'Research & Development'
  },
  {
    value: 'Finance', 
    label: 'Finance'
  },
  {
    value: 'Human Resources', 
    label: 'Human Resources'
  },
  

]    

const positionTitles = [
  {
    value: 'Supervisor', 
    label: 'Supervisor'
  },
  {
    value: 'Technician', 
    label: 'Technician'
  },
  {
    value: 'Project Manager', 
    label: 'Project Manager'
  },
  {
    value: 'Operator', 
    label: 'Operator'
  },
  {
    value: 'Officer', 
    label: 'Officer'
  },
  {
    value: 'Trainer', 
    label: 'Trainer'
  },
  {
    value: 'Team Lead', 
    label: 'Team Lead'
  },
]

const securityClearance = [
  {
    value: 'Trustworthy',
    label: 'Initial Confidential'
  },
  {
    value: 'Initial Confidential',
    label: 'Initial Confidential'
  },
  {
    value: 'Confidential',
    label: 'Confidential'
  },
  {
    value: 'Initial Secret',
    label: 'Initial Secret'
  },
  {
    value: 'Secret',
    label: 'Secret'
  },
  {
    value: 'Top Secret',
    label: 'Top Secret'
  }, 
  {
    value: 'Tertiary Adjunct',
    label: 'Tertiary Adjunct'
  },
  {
    value: 'Primary Adjunct',
    label: 'Primary Adjunct'
  },
]

const jobRegion = [
  {
    value: 'Area 18', 
    label: 'Area 18'
  }, 
  {
    value: 'Hurston', 
    label: 'Hurston'
  },
  {
    value: 'Microtech', 
    label: 'Microtech'
  },
  {
    value: 'Crusader', 
    label: 'Crusader'
  },

]

// function toggle(value){
//   return !value;
// }

// function CheckBoxForm () {
//   const [checked, setChecked] = useState(false);
//   return (
//     <form>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={() => setChecked(toggle)}
//       />
//     </form>
//   )
// }

const createdBy = {
  displayName: user.displayName, 
  id: user.uid
}

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
      assignedUsers, 
      users, 
      positionTitles, 
      

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

    await addDocument(formFields) 
        if (!response.error) {
            // redirects to home page once complete and without error
            history.push('/')
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
            
            <Container>
              
              <Form onSubmit={handleFormSubmit}>
                <label>
                <span>Job Type: </span>
                <Select onChange={(option) => setJob(option)} options={JobType} isMulti/>
                </label>
                <label>
                <span>Select User: </span>
                <Select onChange={(option) => setUsers(option)} options={users}/>
                </label>
                {/* <label>
                <span>Select Team: </span>
                <Select onChange={(option) => setAssignedUsers(option)} options={users} isMulti/>
                </label> */}
                <label>
                <span>Select Position Title: </span>
                <Select onChange={(option) => setPositionTitle(option)} options={positionTitles} isMulti/>
                </label>
                {/* <label>
                <span>Select Team: </span>
                <Select onChange={(option) => setAssignedUsers(option)} options={users} isMulti/>
                </label> */}
                
                
              
            
            <button className="btn">Stage Project</button>
            {formError && <p className='error'>{formError}</p>}
            </Form>
            </Container>
        </div>
        
    )
}




