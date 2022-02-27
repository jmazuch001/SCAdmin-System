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
const [page, setPage] = useState(0);
const [location, setLocation] = useState('');
const [destination, setDestination] = useState('');
const [saleValue, setSaleValue] = useState('')
 
function NextPage() {
  setPage(page => page + 1)
}

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

// function Trade() {
//   return (
//     <Form  className='project-details'>
//     <div >
//        <div className='progressbar'></div> 
//        <div className='details-container'>
//            <div>
//              <label>
//                 <span>Select Cargo Location</span>
//                   <Select 
//                     onChange={(e) => setLocation(e)} options={refineryLocations} 
//                   />
//               </label>
//               <label>
//                 <span>Select Cargo Destination</span>
//                   <Select 
//                     onChange={(e) => setDestination(e)} options={tradingDestinations} 
//                   />
//               </label>
//               </div>
//                <Button>Previous</Button>
//                <Button>Next</Button>
//                <p>This is a P-TAG</p>
           
//        </div>
//     </div>
//     </Form>
//   )
// }



const handleSubmit = async (e) => {
    e.preventDefault()

    const stageToAdd = {
        displayName: user.displayName, 
        content: newStage,
        duration,
        quantity,
        // ship,
        displayMinerals: minerals, 
        refinementType,
        createdAt: TimeStamp(),
        id: CreateID(), 
        location, 
        destination, 
        totalMinerals: totalMinerals(), 
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
        additionalDetails: [...project.additionalDetails, stageToAdd]
    })
    if (!response.error) {
        setNewStage('');
    }

    
}

    return ( 
        <div>            
                <Container className='container-details'>
                <div className='project-details'>Progress Bar</div>
                {/* FIRST PAGE / STAGE OF M/T FORM */}
                {page === 0 &&
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
                    <span>Total Yield Quantity:</span>
                    <input placeholder='Quantity in cSCU'  onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
                </Form.Field>
                <label>
                    <span>Refinement Method:</span>
                    <Select 
                        onChange={(e) => setRefinementType(e)} options={refinement} isMulti
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
}
                <div>
                  
              {/* <Button><Link to="/DeliveryConfirmation" className={styles['link-text']}>Next Step</Link></Button>     */}
                   
               
              {/* {page === 2 && <TradeDetailsForm />} */}
              {page === 1 && 
              <Form  className='project-details' onSubmit={handleSubmit}>
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

                     
                 </div>
                 
              </div>
              
                  
              </Form>
              
              
              }
              {page === 2 && 
              <Form className="add-comment" onSubmit={handleSubmit}>
                <Form.Field>
                    <span className='project-details'>Total Sale Value: </span>
                    <input placeholder='Sale Amount in aUEC'  onChange={(e) => setSaleValue(e.target.value)} value={saleValue}/>
                </Form.Field>
                <ul>
                    {project.additionalDetails.length > 0 && project.additionalDetails.map(nextPageDetails => (
                      <li key={nextPageDetails.id}>
                        <div className="detail-author">
                          <p>Added By: {nextPageDetails.displayName}</p>
                        </div>
                        <div className="detail-date">
                      <p>Created on {nextPageDetails.createdAt.toDate().toDateString()}</p>
                        </div>
                        <div className="detail-content">
                          {/* <p>{detail.content}</p> */}
                          <Table celled>
                                <Table.Header>
                                  <Table.Row>
                                    <Table.HeaderCell>Location{nextPageDetails.location}</Table.HeaderCell>
                                    <Table.HeaderCell>Destination{nextPageDetails.destination}</Table.HeaderCell>
                                    <Table.HeaderCell>Created At: {nextPageDetails.createdAt.toDate().toDateString()}</Table.HeaderCell>
                                  </Table.Row>
                                </Table.Header>
                                </Table>
                        </div>
                      </li>
                    ))}
                    
                  </ul>
              </Form>
              }
              {page === 3 && 
              <Form onSubmit={handleSubmit} className='project-details'>
              <ul>
              {project.additionalDetails.length > 0 && project.additionalDetails.map(nextPageDetails => (
                <li key={nextPageDetails.id}>
                  <div className="detail-author">
                    <p>Added By: {nextPageDetails.displayName}</p>
                  </div>
                  <div className="detail-date">
                <p>Created on {nextPageDetails.createdAt.toDate().toDateString()}</p>
                  </div>
                  <div className="detail-content">
                    {/* <p>{detail.content}</p> */}
                    <Table celled>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Location{nextPageDetails.location}</Table.HeaderCell>
                              <Table.HeaderCell>Destination{nextPageDetails.destination}</Table.HeaderCell>
                              <Table.HeaderCell>Sale Amount: {nextPageDetails.saleValue}</Table.HeaderCell>
                              <Table.HeaderCell>Created At: {nextPageDetails.createdAt.toDate().toDateString()}</Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          </Table>
                  </div>
                </li>
              ))}
              
            </ul>
            <button className='btn'>Final Details</button>
            </Form>
              }
              
              <Button onClick={NextPage}>Next Page</Button>

            </div>
                </Container>
                                    
                
                
                
            {/* <StageOne /> */}
            
                
        </div>

        
    )

}




