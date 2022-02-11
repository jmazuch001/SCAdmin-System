// this is a component
import React from 'react'
import styles from '../data pages/Project.css'
import { useState, useEffect } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom' 
import {Link} from 'react-router-dom'
// component library references
import { Form, Button, Step, Icon, Dropdown, Container, Grid, Table, Input } from 'semantic-ui-react'
import Select from 'react-select'
import FirstStage from '../create/FirstStage'
import TransactionReportList from '../office/TransactionReportList'
import AddRemoveFields from '../../Components/AddRemoveFields'

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

      const refinement = [
        {
          value: "Cormack Method", 
          label: "Cormack Method", 
          text: "Cormack Method"
        }, 
        {
          value: "Dinyx Solvention", 
          label: "Dinyx Solvention"
        }, 
        {
          value: "Electrostarolysis", 
          label: "Electrostarolysis"
        }, 
        {
          value: "Ferron Exchange", 
          label: "Ferron Exchange"
        }, 
        {
          value: "Gaskin Process", 
          label: "Gaskin Process"
        }, 
        {
          value: "Kazen Winnowing", 
          label: "Kazen Winnowing"
        }, 
        {
          value: "Pyrometric Chromalysis", 
          label: "Pyrometric Chromalysis"
        }, 
        {
          value: "Thermonatic Deposition", 
          label: "Thermonatic Deposition"
        }, 
        {
          value: "XCR Reaction", 
          label: "XCR Reaction"
        }
      ]

const { updateDocument, response } = useFirestore('lifecycles')
const [newStage, setNewStage] = useState('');
const [refinementType, setRefinementType] = useState('');
const [minerals, setNewMinerals] = useState('');
const [quantity, setQuantity] = useState('');
const [duration, setDuration] = useState('');
const [ship, setShip] = useState('');
const { user } = useAuthContext()
const [process, setNextProcess] = useState(1);
// disable add stage button once cargo capacity is exceeded or = to capacity
// const [disable, setDisable] = React.useState(false);

// function SetStageDisable() {
//   if(stageToAdd.quantity === project.carrierShip.capacity || stageToAdd.quantity > project.carrierShip.capacity){
//     return (
//       <div>
//         <p>No longer able to add another stage! Please create another project to track these details.</p>
//       </div>
//     )
//   }
// }

function nextProcess() {
  setNextProcess(process => process + 1)
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const stageToAdd = {
        displayName: user.displayName, 
        content: newStage,
        duration,
        quantity,
        ship,
        displayMinerals: minerals, 
        refinementType,
        // createdAt: timestamp.fromDate(new Date()),
        createdAt: TimeStamp(),
        created: TimeStamp2(),
        id: CreateID()
    }



    function CreateID () {
       return "MT" + Math.floor(Math.random() * 1000); 
    }

    function TimeStamp() {
      const date = new Date(2022, 11, 24, 10,)
      return date
    }

    function TimeStamp2() {
      const today = new Date()
      let month = today.getDate()
      let year = today.getMonth()
      let date = today.getDate()
      let time = today.getTime()
      let current_date = `${year}, ${month}, ${date}` + ` at ${time}`

     return current_date;
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

          {/* form transition */}
          
            {/* <Form required onClick={(e) => setNewStage(e.target.value)} value={newStage}>
                Add Stage
                </Form> */}
                {/* <Form onSubmit={handleSubmit}> */}
                <Container className='container-details'>
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
                        {/* <AddRemoveFields />    */}
                    </label>
                
                <Form.Field>
                    <span>Total Yield Quantity:</span>
                    <input placeholder='Quantity in cSCU'  onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
                </Form.Field>
                <label>
                    <span>Refinement Method:</span>
                    <Select 
                        onChange={(e) => setRefinementType(e)} options={refinement} isMulti
                    />
                </label>
                <label>
                    <span>Ship Class:</span>
                    <Select 
                        onChange={(e) => setShip(e)} options={shipClass} isMulti={true}
                    />
                </label>
                    <Form>
                        <Form.Field>
                            <label className="project-details">Enter Processing Duration (in hours)</label>
                            <input placeholder='Estimated Duration' onChange={(e) => setDuration(e.target.value)} value={duration}/>
                            
                        </Form.Field>
                        </Form>
                        
                        </Form>
                        <form className="add-comment" onSubmit={handleSubmit}>
                    <label>
                      <span>Add new comment:</span>
                      <textarea 
                        onChange={(e) => setNewStage(e.target.value)}
                        value={newStage}
                      ></textarea>
                    </label>
                   
                  </form>
                        <button className='btn'>Add Stage</button>
                </div>
                
                </label>
                
                <div className="project-details">
                <div>
                            <ul>
                    {project.additionalDetails.length > 0 && project.additionalDetails.map(detail => (
                      <li key={detail.id}>
                        <div className="detail-author">
                          
                          <p>Added By: {detail.displayName}</p>
                        </div>
                        <div className="detail-date">
                      <p>Created on {detail.createdAt.toDate().toDateString()}</p>
                        </div>
                        <div className="detail-content">
                          {/* <p>{detail.content}</p> */}
                          <Table celled>
                                <Table.Header>
                                  <Table.Row>
                                    <Table.HeaderCell>Yield Quantity: {detail.quantity} cSCU</Table.HeaderCell>
                                    {/* <Table.HeaderCell>Method: {detail.refinementMethod}</Table.HeaderCell> */}
                                    <Table.HeaderCell>Duration: {detail.duration} Hours</Table.HeaderCell>
                                    <Table.HeaderCell>Stage ID: {detail.id}</Table.HeaderCell>
                                    <Table.HeaderCell>Comments: {detail.content}</Table.HeaderCell>
                                    {/* <Table.HeaderCell>Ship: {detail.ship['']}</Table.HeaderCell> */}
                                    {/* <Table.HeaderCell>Minerals: {detail.displayMinerals[{}]}</Table.HeaderCell> */}
                                    <Table.HeaderCell>Created At: {detail.createdAt.toDate().toDateString()}</Table.HeaderCell>
                                  </Table.Row>
                                </Table.Header>
                                </Table>
                        </div>
                      </li>
                    ))}
                    
                  </ul>

                </div>
      

      
                </div>

                
                
                </Form>
                <div>
              <Button><Link to="/DeliveryConfirmation" className={styles['link-text']}>Next Step</Link></Button>
              
            </div>
                </Container>
                                    
                
                
                
            {/* <StageOne /> */}
            
                
        </div>

        
    )
    // function deliveryConfirmation () {
    //   return(
    //     <div>

    //     </div>
    //   )
    // }
}

// function deliveryPending() {
//   const [duration, setDuration] = useState('');
//   return (
//     <div>
//            <Form>
//             <Form.Field>
//                <label className="project-details">Enter Processing Duration (in hours)</label>
//                 <input placeholder='Estimated Duration' onChange={(e) => setDuration(e.target.value)} value={duration}/>         
//               </Form.Field>
//             </Form>
//     </div>
//   )
// }

// function deliveryConfirmation() {
//   return (
//     <div>

//     </div>
//   )
// }