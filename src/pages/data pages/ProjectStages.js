// this is a component
import React from 'react'
import { useState, useEffect } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom' 
// component library references
import { Form, Button, Step, Icon, Dropdown, Container, Grid, Table } from 'semantic-ui-react'
import Select from 'react-select'
import FirstStage from '../create/FirstStage'
import TransactionReportList from '../office/TransactionReportList'

// function component data /////////////////////////////////////////


  const starSystem = [
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

  //////////////////////////////////////////////////////////////////////

// project details, context, and general CRUD ops


export default function ProjectStages({ project }) {
    const newMinerals = [
        {
          value: 'Quantanium', 
          label: 'Quantanium', 
          
        }, 
        {
          value: 'Agrecium', 
          label: 'Agrecium',
          
        }, 
        {
          value: 'Laranite', 
          label: 'Laranite',
          
        }, 
        {
          value: 'Bexalite', 
          label: 'Bexalite',

        }, 
        {
            value: 'Taranite', 
            label: 'Taranite',
            
          },
          {
            value: 'Borase', 
            label: 'Borase',
            
          },
          {
            value: 'Hephaestanite', 
            label: 'Hephaestanite',
            
          },
          {
            value: 'Titanium', 
            label: 'Titanium',
            
          },
          {
            value: 'Diamond', 
            label: 'Diamond',
            
          },
          {
            value: 'Gold', 
            label: 'Gold',
           
          },
          {
            value: 'Taranite', 
            label: 'Taranite',
            
          },
        {
          value: 'Inert', 
          label: 'Inert', 
          
        }, 
      ]

      const shipClass = [
        {
          value: 'Carack', 
          label: 'Carack', 
          
        }, 
        {
          value: 'A2 Hercules', 
          label: 'A2 Hercules',
          
        }, 
        {
          value: 'C2 Hercules', 
          label: 'C2 Hercules',
          
        }, 
        {
          value: 'M2 Hercules', 
          label: 'M2 Hercules',

        }, 
        {
            value: 'Caterpillar', 
            label: 'Caterpillar',
            
          },
          {
            value: 'Cutlass Black', 
            label: 'Cutlass Black',
            
          },
          {
            value: 'Constellation Andromeda', 
            label: 'Constellation Andromeda',
            
          }
        ]

const { updateDocument, response } = useFirestore('lifecycles')
const [newStage, setNewStage] = useState('');
const [minerals, setNewMinerals] = useState('');
const [quantity, setQuantity] = useState('');
const [duration, setDuration] = useState('');
const [ship, setShip] = useState('');
const { user } = useAuthContext()



const handleSubmit = async (e) => {
    e.preventDefault()

    const stageToAdd = {
        displayName: user.displayName, 
        content: newStage,
        duration,
        quantity,
        ship,
        displayMinerals: minerals, 
        createdAt: timestamp.fromDate(new Date()),
        id: Math.random()
    }

    await updateDocument(project.id, {
        additionalDetails: [...project.additionalDetails, stageToAdd]
    })
    if (!response.error) {
        setNewStage('');
    }
}

    return (
        <div>
            {/* <Form required onClick={(e) => setNewStage(e.target.value)} value={newStage}>
                Add Stage
                </Form> */}
                {/* <Form onSubmit={handleSubmit}> */}
                <Form onSubmit={handleSubmit} className='project-details'>
                    <label>
                        <h4>Additional Stages</h4>
                    <div>
                    <Form >
                    <label>
                    <span>Additional Minerals:</span>
                        <Select 
                            onChange={(e) => setNewMinerals(e)} options={newMinerals} isMulti
                        />
                    </label>
                
                <Form.Field>
                    <span>Quantity in SCU:</span>
                    <input placeholder='Quantity'  onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
                </Form.Field>
                <label>
                    <span>Ship Class:</span>
                    <Select 
                        onChange={(e) => setShip(e)} options={shipClass} isMulti
                    />
                </label>
                    <Form>
                        <Form.Field>
                            <label>Enter Processing Duration (in hours)</label>
                            <input placeholder='Estimated Duration'  onChange={(e) => setDuration(e.target.value)} value={duration}/>
                            
                        </Form.Field>
                        </Form>
                        
                        </Form>
                        <button className='btn'>Add Stage</button>
                </div>
                
                </label>
                
                <div className="project-details">
                <div>
                            <ul>
                    {project.additionalDetails.length > 0 && project.additionalDetails.map(detail => (
                      <li key={detail.id}>
                        <div className="detail-author">
                          
                          <p>{detail.displayName}</p>
                        </div>
                        <div className="detail-date">
                          <p>date here</p>
                        </div>
                        <div className="detail-content">
                          <p>{detail.content}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                </div>
      

      
                </div>
                {/* <form className="add-comment" onSubmit={handleSubmit}>
                    <label>
                      <span>Add new comment:</span>
                      <textarea 
                        onChange={(e) => setNewStage(e.target.value)}
                        value={newStage}
                      ></textarea>
                    </label>
                    <button className="btn">Add Comment</button>
                  </form>
                <container>
                  <label>Additional Data On Record:
                    <div>
                <div>
                <ul onChange={(e) => setNewStage(e.target.value)}
                    value={newStage}>
                    {project.additionalDetails.length > 0 && project.additionalDetails.map(details =>(
                        <li key={details.stageToAdd.id}>
                            <div>
                            <p>{details.stageToAdd.displayName}</p>
                            </div>
                            <div>
                                <li>Date {details.stageToAdd.createdAt.seconds}</li>
                                <Icon question circle outline />
                            </div>
                            <div>
                                <Table celled>
                                <Table.Header>
                                  <Table.Row>
                                    <Table.HeaderCell>Quantity: {details.stageToAdd.quantity}</Table.HeaderCell>
                                    <Table.HeaderCell>Duration: {details.stageToAdd.duration} Hours</Table.HeaderCell>
                                    <Table.HeaderCell>Stage ID: {details.stageToAdd.id}</Table.HeaderCell>
                                    <Table.HeaderCell>Comments: {details.stageToAdd.content}</Table.HeaderCell>
                                  </Table.Row>
                                </Table.Header>
                                </Table>
                                
                            </div>
                        </li>
                    ))}
                </ul>
                </div>
            
            </div>
                  </label>
                </container> */}
                
                </Form>

                
                
                
            {/* <StageOne /> */}
            
                
        </div>
        
    )
}

// displayName: user.displayName, 
//         content: newStage,
//         duration,
//         quantity,
//         ship,
//         displayMinerals: minerals, 
//         createdAt: timestamp.fromDate(new Date()),
//         id: Math.random()

// function StageOne() {
//     return (
//         <div>
//             {/* REFINEMENT */}
//       <Step.Content>
//         <Step.Title>Refinement</Step.Title>
//         <Step.Description>Enter Refinement Manifest</Step.Description>
//         <Dropdown placeholder='Select Minerals' 
//         fluid multiple selection options={minerals} />
//         <Button>Submit Manifest</Button>
//         <Form>
//     <Form.Field>
//       <label>Enter Processing Duration (in hours)</label>
//       <input />
//       <Button>Start Tracking</Button>
//     </Form.Field>
//   </Form>
//       </Step.Content>
    
//         </div>
//     )
// }

// function StageTwo() {
//     return (
//         <div>

//         </div>

//     )
// }