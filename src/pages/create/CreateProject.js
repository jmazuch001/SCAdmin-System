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
// extra imports
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom'
import { Toolbar } from '@mui/material'

// styles
import styles from './CreateProject.css'
import FirstStage from './FirstStage'
import { FormBox, FormContainer } from '../../Components/Custom MUI Forms/MultiStage Forms/CustFormComponents'
import CustTextField from '../../Components/Custom MUI Forms/MultiStage Forms/CustTextField'
import { CornerButton } from '../../Components/Custom MUI Forms/MultiStage Forms/CustButton'

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

  const jobGroup = [
  {
    value: 'HIGROUP', 
    label: 'HIGROUP'
  }, 
  {
    value: 'Affiliate', 
    label: 'Affiliate'
  }, 
  {
    value: 'Contract Work Order', 
    label: 'Contract Work Order'
  }]
  
  const starSystems = [
    {
      value: 'Crusader', 
      label: 'Crusader'
    },
    {
      value: 'Area 18', 
      label: 'Area 18'
    },
    {
      value: 'Microtech', 
      label: 'Microtech'
    },
    {
      value: 'Hurston', 
      label: 'Hurston'
    },]

    const shipClasses = [
      {
        value: 'Carack', 
        label: 'Carack', 
        capacity: 45600
      }, 
      {
        value: 'A2 Hercules', 
        label: 'A2 Hercules',
        capacity: 21600
      }, 
      {
        value: 'C2 Hercules', 
        label: 'C2 Hercules',
        capacity: 69600
      }, 
      {
        value: 'M2 Hercules', 
        label: 'M2 Hercules',
        capacity: 52200
      }, 
      {
          value: 'Caterpillar', 
          label: 'Caterpillar',
          capacity: 56400
        },
        {
          value: 'Cutlass Black', 
          label: 'Cutlass Black',
          capacity: 4600
        },
        {
          value: 'Constellation Andromeda', 
          label: 'Constellation Andromeda',
          capacity: 9600
        },
        {
          value: 'Constellation Phoenix', 
          label: 'Constellation Phoenix',
          capacity: 9600
        },
        {
          value: 'Constellation Taurus', 
          label: 'Constellation Taurus',
          capacity: 17400
        },
        {
          value: 'Constellation Aquila', 
          label: 'Constellation Aquila',
          capacity: 9600
        },
        {
          value: 'Raft', 
          label: 'Raft',
          capacity: 9600
        }
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
  const history = useHistory()
    // map through the documents and put into new array of users
    const { documents } = useCollection('users')
    const [users, setUsers] = useState([])
    
    // person who created project can save info about it in the db
    const { user } = useAuthContext();
    const { addDocument, response } = useFirestore('lifecycles')
    
    // multi-page form setup
    const [page, setPage] = useState(1);

    // conditional rendering
    const [ job, setJob] = useState('');

    // set Star System
    const [ starSystem, setStarSystem] = useState('');

    // set carrier ship [shipClasses]
    const [ carrierShip, setCarrierShip ] = useState('');

    // form fields
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')

    const [assignedUsers, setAssignedUsers] = useState([])
    const [formError, setFormError] = useState(null)

    // function convertCapacityToInteger() {
    //   shipClasses.map(function(objects) {
    //     return {
    //       value: objects.value, 
    //       lablel: objects.value,
    //       capacity: parseInt(objects.capacity)
    //     }
    //   })
    // }

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
          job,
          starSystem,
          name,
          carrierShip, 
          details,
          category: category.value, 
          dueDate: timestamp.fromDate(new Date(dueDate)), 
          // comments: [],
          additionalDetails: [], 
          createdBy, 
          assignedUsersList 
          
        }

        
        await addDocument(project)
        if (!response.error) {
          // redirects to home page once complete and without error
          history.push('/Dashboard')
        }
        
    }

    return(
      
      <div>
        {/* <h1>{page === 1 && <StageOne />}</h1> */}
        {/* step system */}
        <div className="create-form">
            <section>
              <div>
            <h2 className='page-title'>Create New Workflow</h2>
            </div>
            </section>
            
            <FormBox >
            
            <FormContainer onSubmit={handleSubmit}>
              <label htmlFor=''>
            <span>Job Group:</span>
            <Select 
                        onChange={(option) => setJob(option)}
                        options={jobGroup}
                    />
                    <span>Location:</span>
                    <Select 
                        onChange={(option) => setStarSystem(option)}
                        options={starSystems}
                    />
                    <span>Designate Carrier Ship:</span>
                    <Select 
                        onChange={(option) => setCarrierShip(option)}
                        options={shipClasses}
                    />
                    </label>
                <label htmlFor="">
                    <span>Job Description:</span>
                    <CustTextField required type='text' onChange={(e) => setName(e.target.value)}
                    value={name} />
                    
                </label>
                <label htmlFor="">
                    <span>Project Details:</span>
                    <CustTextField required type='text' onChange={(e) => setDetails(e.target.value)}
                    value={details} />
                    
                </label>
                <label htmlFor="">
                    <span>Set Due Date:</span>
                    <CustTextField required type='date' onChange={(e) => setDueDate(e.target.value)}
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
                <CornerButton className="btn">Stage Project</CornerButton>
                {formError && <p className='error'>{formError}</p>}
            </FormContainer>
            
            {/* {page === 2 && <StageTwo />}
            {page === 3 && <StageThree />}
            {page === 4 && <StageFour />} */}
            </FormBox>
            
            
            
        </div>
        
        </div>
    )
}