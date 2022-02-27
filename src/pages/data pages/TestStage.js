// this is a component
import React from 'react'
import styles from '../data pages/Project.css'
import { useState, useEffect } from 'react'
import { projectFirestore, timestamp } from '../../firebase/config'
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
import TradeDetailsForm from '../../Components/TradeDetailsForm'
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

const { updateDocument, response } = useFirestore('lifecycles')
const [newStage, setNewStage] = useState('');
const [refinementType, setRefinementType] = useState('');
const [minerals, setNewMinerals] = useState('');
const [quantity, setQuantity] = useState('');
const [duration, setDuration] = useState('');
const [ship, setShip] = useState('');
const { user } = useAuthContext()

const [location, setLocation] = useState('');
const [destination, setDestination] = useState('');
const [saleValue, setSaleValue] = useState('')
 


const handleSubmit = async (e) => {
    e.preventDefault()

    const stageToAdd = {
        displayName: user.displayName, 
        content: newStage,
        duration,
        quantity,
        displayMinerals: minerals, 
        refinementType,
        createdAt: TimeStamp(),
        id: CreateID(), 
        location, 
        destination, 
        saleValue 
    }

    function totalMinerals() {
      // this total should be the running total of all minerals being transported in each order / bill
      return quantity
    }


    function CreateID () {
       return "MT" + Math.floor(Math.random() * 1000); 
    }

    function TimeStamp() {
      const date = new Date()
      return date
    }


    await updateDocument(project.id, {
        logisticsDetails: [...project.logisticsDetails, stageToAdd],

        // nextPageDetails: [...project.nextPageDetails, stageToAdd], 
        // finalDetails: [...project.finalDetails, stageToAdd]
    })
    if (!response.error) {
        setNewStage('');
    }

    

}

    return ( 
        <div>            
                <Container className='container-details'>
                <div className='project-details'>Progress Bar</div>
                <div>
                //   <Form onSubmit={handleSubmit} className='project-details'>
            //   <ul>
            //   {project.logisticsDetails.length > 0 && project.logisticsDetails.map(detail => (
                <li key={detail.id}>
                  <div className="detail-author">
                    <p>Added By: {detail.displayName}</p>
                  </div>
                  <div className="detail-date">
                {/* <p>Created on {additionalDetails.createdAt.toDate().toDateString()}</p> */}
                  </div>
                  <div className="detail-content">
                    {/* <p>{detail.content}</p> */}
                    <Table celled>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Location{detail.location}</Table.HeaderCell>
                              <Table.HeaderCell>Destination{detail.destination}</Table.HeaderCell>
                              <Table.HeaderCell>Sale Amount: {detail.saleValue}</Table.HeaderCell>
                              <Table.HeaderCell>Created At: {detail.createdAt.toDate().toDateString()}</Table.HeaderCell>
                              <Table.HeaderCell>Location{detail.location}</Table.HeaderCell>
                              
                            </Table.Row>
                          </Table.Header>
                          </Table>
                  </div>
                </li>
              ))}
              
            </ul>
            
            </Form>

                </div>
                
          
                <div>      
              {/* <Button><Link to="/DeliveryConfirmation" className={styles['link-text']}>Next Step</Link></Button>     */}
                   
               
              {/* {page === 2 && <TradeDetailsForm />} */}

              
            
              
              {/* <button onClick={NextPage} className='btn'>Next</button> */}
              {/* <Button onClick={NextPage} className='btn'>Next Page</Button>
              <button className='btn'>Final Details</button> */}
              

            </div>
                </Container>
                                    
                
                
                
            
            
                
        </div>

        
    )

}




