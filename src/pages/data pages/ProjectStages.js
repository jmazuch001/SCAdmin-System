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
import { Form, Button, Step, Icon, Dropdown, Container, Grid, Table, Inpu, Progress, Divider, Label } from 'semantic-ui-react'
import Select from 'react-select'
import FirstStage from '../create/FirstStage'
import TransactionReportList from '../office/TransactionReportList'
import AddRemoveFields from '../../Components/AddRemoveFields'
import TradeDetailsForm from '../../Components/TradeDetailsForm'
import ProjectList from '../../Components/ProjectList'
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
const [page, setPage] = useState(1);
const [location, setLocation] = useState('');
const [destination, setDestination] = useState('');
const [saleValue, setSaleValue] = useState('')
 

// setting up display of data
// const [data, setData] = useState(null)
// const [isPending, setIsPending] = useState(false)
// const [error, setError] = useState(false)

// useEffect(() => {
//   setIsPending(true)

//   projectFirestore.collection('lifecycles', project.id).get().then((snapshot) => {
//     if (snapshot.empty) {
//       setError('No data to display')
//       setIsPending(false)
//     } else {
//       let results = []
//       snapshot.docs.forEach(doc => {
//         results.push({ id: doc.id, ...doc.data() })
//       })
//       setData(results)
//       setIsPending(false)
//     }
//   }).catch(err => {
//     setError(err.message)
//     setIsPending(false)
//   })
// }, [])



function NextPage() {
  const page = 2;
  if (page > 0) {
    setPage(page => page + 1)
  } else {
    previousPage()
  }
  
}

function previousPage() {
  setPage(page => page - 1)
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




const handleStageOneSubmit = async (e) => {
    e.preventDefault()

    const stageToAdd = {
        displayName: user.displayName, 
        content: newStage,
        duration,
        quantity,
        // quantityRemaining: capacityCalculator(),
        // ship,
        displayMinerals: minerals, 
        refinementType,
        createdAt: TimeStamp(),
        id: CreateID(), 
        // location, 
        // destination, 
        totalMinerals: totalMinerals(), 
        // saleValue 
    }


//   const shipCargoCapacity = project.carrierShip.capacity
//   const cargoLoadQuantity = handleStageOneSubmit.stageToAdd.quantity

//   function capacityCalculator () {
//   const remainingCapacity = shipCargoCapacity - cargoLoadQuantity
//   return (
//     <div>
//       <p>Quantity Remaining: {remainingCapacity}</p>
//     </div>
//   )
// }

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




const handleStageTwoSubmit = async (e) => {
  e.preventDefault()

  const tradeLogistics = {
      location, 
      destination,   
  }

  function totalMinerals() {
      // this total should be the running total of all minerals being transported in each order / bill
      return quantity
    }

    await updateDocument(project.id, {


        stageTwoDetails: [{...project.stageTwoDetails, tradeLogistics}], 
        // finalDetails: [...project.finalDetails, stageToAdd]
    })
    if (!response.error) {
        setNewStage('');
    }

}

const handleStageThreeSubmit = async (e) => {
  e.preventDefault()

  const billOfSale = { 
      saleValue
  }

  

    await updateDocument(project.id, {


        stageThreeDetails: [{...project.stageThreeDetails, billOfSale}], 
        // finalDetails: [...project.finalDetails, stageToAdd]
    })
    if (!response.error) {
        setNewStage('');
    }

}

// const handleStageFourSubmit = async (e) => {
//   e.preventDefault()

//   const finalDetails = {
//     reviewFinalDetails
//   }

//   function totalMinerals() {
//     // this total should be the running total of all minerals being transported in each order / bill
//     return quantity
//   }

//   await updateDocument(project.id, {
//     stageFourDetails: [{...project.stageFourDetails, finalDetails}]
//   })

//   if (!response.error) {
//     setNewStage('no record');
//   }

// }

    return ( 
        <div>            
                <Container  className='forms'>
                
                
                <div>
                  <progress max="3" value={page} />
                </div>
                {/* FIRST PAGE / STAGE OF M/T FORM */}
                {page === 1 &&
                <Form  onSubmit={handleStageOneSubmit} className='project-details'>
                  
                    <label>
                        <h4>Additional Stages</h4>
                    <div>
                    <div className='progressbar'></div>
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
                        <form className="add-comment" onSubmit={handleStageOneSubmit}>
                    <label>
                      <span>Add new comment:</span>
                      <textarea 
                        onChange={(e) => setNewStage(e.target.value)}
                        value={newStage}
                      ></textarea>
                    </label>
                   
                  </form>
                        <Button color='teal'>Add Stage</Button>
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
                                    <Table.HeaderCell>Yield Quantity</Table.HeaderCell>
                                    <Table.HeaderCell>Refinement Method</Table.HeaderCell>
                                    <Table.HeaderCell>Duration</Table.HeaderCell>
                                    <Table.HeaderCell>Stage ID</Table.HeaderCell>
                                    <Table.HeaderCell>Comments</Table.HeaderCell>
                                    {/* <Table.HeaderCell>Ship: {detail.ship}</Table.HeaderCell> */}
                                    <Table.HeaderCell>Minerals</Table.HeaderCell>
                                    <Table.HeaderCell>Created At</Table.HeaderCell>
                                  </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                <Table.Row>
                                  <Table.Cell>{detail.quantity} cSCU</Table.Cell>
                                  <Table.Cell>{detail.refinementType.map((refinementMethodUsed) => {
                                      return (
                                        <li>{refinementMethodUsed.value}</li>
                                      )
                                    })}
                                    </Table.Cell>
                                  <Table.Cell>{detail.duration} Hours</Table.Cell>
                                  <Table.Cell>{detail.id}</Table.Cell>
                                  <Table.Cell>{detail.content}</Table.Cell>
                                  <Table.Cell>{detail.displayMinerals.map((mineralList) => {
                                      return(
                                        <li>{mineralList.value}</li>
                                      )
                                    })}
                                    </Table.Cell>
                                  <Table.Cell>{detail.createdAt.toDate().toDateString()}</Table.Cell>
                                </Table.Row>

                              </Table.Body>
                                </Table>
                        </div>
                      </li>
                    ))}
                    
                  </ul>

                </div>
      

      
                </div>

                <div>
                <Button className='next-page-button' color='teal' onClick={NextPage}>Next Page</Button>
                </div>
                
                </Form>
}
                <div>
                  
              {/* <Button><Link to="/DeliveryConfirmation" className={styles['link-text']}>Next Step</Link></Button>     */}
                   
               
              {/* {page === 2 && <TradeDetailsForm />} */}
              {page === 2 && 
              <Form onSubmit={handleStageTwoSubmit} >
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
                        <div className='project-details'>
                        
                        </div>
                        
                        </div>

                     
                 </div>
                 <Button color='blue' inverted className='project-button-styles' >Confirm Logistics</Button>
                 <div>
                 <Button color='teal' onClick={NextPage}>Next Page</Button>
                 </div>
                 
              </div>
              
              
              </Form>
              
              
              }
              {page === 3 && 
              <Form  onSubmit={handleStageThreeSubmit} >
                <Form.Field>
                    <span className='project-details'>Total Sale Value: </span>
                    <input className='' placeholder='Sale Amount in aUEC'  onChange={(e) => setSaleValue(e.target.value)} value={saleValue}/>
                </Form.Field>
                <Button color='teal' inverted className='btn'>Forward Amount</Button>
                <Button color='red' inverted><Link to="/office" className={styles['link-text']}>Close Project</Link></Button>
              </Form>
              
              }

              {/* {page === 4 && 
              <Form >
                <Form.Field>
                    {error && <p className='error'>{error}</p>}
                    {isPending && <p className='loading'>Loading...</p>}
                    {data && <ProjectList projects={data} />}
                </Form.Field>
                <button className='btn'>Confirm</button>
              </Form>
              } */}
              
              {/* <Button onClick={NextPage}>Next Page</Button> */}

            </div>

              
                
                </Container>
                                    
                
                
                
            {/* <StageOne /> */}
            
                
        </div>

        
    )

}