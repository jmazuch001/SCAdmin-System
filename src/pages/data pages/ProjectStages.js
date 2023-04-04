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
import { Form, Input, Checkbox, Button, Modal, Header, Step, Icon, Dropdown, Grid, Inpu, Progress, Divider, Label, Segment } from 'semantic-ui-react'
import Select from 'react-select'
import FirstStage from '../create/FirstStage'
import TransactionReportList from '../office/TransactionReportList'
import AddRemoveFields from '../../Components/AddRemoveFields'
import TradeDetailsForm from '../../Components/TradeDetailsForm'
import ProjectList from '../../Components/ProjectList'
import { PriceCheckSharp } from '@mui/icons-material'
import ProjectOverview from './ProjectOverview'
import TestStage from './TestStage'
import MediaQuery from 'react-responsive'

// import Box from '@mui/material/Box';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
import { Table, Container  } from 'semantic-ui-react'
import { CustomBox, CustomPaper, CustomTableContainer, SmallBox, SmallTableContainer } from '../../Components/Custom MUI Tables/MUITable'
import CustTextField from '../../Components/Custom MUI Forms/MultiStage Forms/CustTextField'
import { CustSegment, CustSpan, NewForm, FormContainer } from '../../Components/Custom MUI Forms/MultiStage Forms/CustFormComponents'
import StageOne from '../../Components/Custom MUI Forms/StageOne'
// import ProjectOverview from './ProjectOverview'

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
    }
  ]

  //////////////////////////////////////////////////////////////////////

// project details, context, and general CRUD ops


export default function ProjectStages({ project, props }) {
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
            value: 'Quartz', 
            label: 'Quartz', 
            
          },
          {
            value: 'Tungsten', 
            label: 'Tungsten', 
            
          },
          {
            value: 'Beryl', 
            label: 'Beryl', 
            
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
// const [concurrentQuantity, setConcurrentQuantity] = useState('');
const [duration, setDuration] = useState('');
const [ship, setShip] = useState('');
const { user } = useAuthContext()
const [page, setPage] = useState(1);
const [location, setLocation] = useState('');
const [destination, setDestination] = useState('');
const [saleValue, setSaleValue] = useState('')
const [dueDate, setDueDate] = useState('')
const [totalReturnSale, setTotalReturnSale] = useState('')
const [formFieldDefault, setFormFieldDefault] = useState(0)

// modal
const [open, setOpen] = React.useState(false)



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

// const mineralQuantity = [];
// const mineralRunningQuantity = quantity.map((total) => {
//   <li key={total}>{total}</li>
// })

// Default Form Field Values


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


// let totalSaleValue = saleValue;
// function calculateUserReturnValues() {
//   return totalSaleValue / project.assignedUsersList.length;
// }





  let remainingCapacity = project.carrierShip.capacity;
  for(const additionalDetails of project.additionalDetails) {
    remainingCapacity = remainingCapacity - additionalDetails.quantity;
    
  }

  function LowCapacityWarning() {
    
    if (remainingCapacity < 5000) {
      return (
        <div>
          <p>Warning! Ship Cargo Storage Capacity is dangerously low! Proceed to logistics step.</p>
        </div>
      )
    } 
  }
  
  
  // let numOfUsers = project.assignedUsersList.length + project.createdBy.length;
  // let totalSaleValue = project.stageThreeDetails.billOfSale.saleValue
  // for(const stageThreeDetails of project.additionalDetails) {
  //   let totalSplitPerPerson = totalSaleValue / numOfUsers;
  // }

  
  // function ReturnSalesSplit() {
  //   let numOfUsers = project.assignedUsers.length + project.createdBy.length;  
  //   const splitTotal = saleValue / numOfUsers;
  //   return splitTotal
  // }

const handleStageOneSubmit = async (e) => {
    e.preventDefault()

    const stageToAdd = {
        displayName: user.displayName, 
        content: newStage,
        duration,
        quantity,
        dueDate: timestamp.fromDate(new Date(dueDate)),
        // quantityRemaining: runningTotal,
        // ship,
        displayMinerals: minerals, 
        refinementType,
        createdAt: TimeStamp(),
        id: CreateID(), 
        // location, 
        // destination, 
        // totalMinerals: totalMinerals(), 
        // saleValue 
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
        setNewStage('') 
        setNewMinerals('') 
        setQuantity('')
        setDuration('')
    } else {
      setNewStage('') 
        setNewMinerals('') 
        setQuantity('')
        setDuration('')
    }
}




const handleStageTwoSubmit = async (e) => {
  e.preventDefault()

  const tradeLogistics = {
      location, 
      destination,   
  }
    await updateDocument(project.id, {
        stageTwoDetails: [{...project.stageTwoDetails, tradeLogistics}], 
        // finalDetails: [...project.finalDetails, stageToAdd]
    })
    if (!response.error) {
        setNewStage('');
    }
}

// let calculateValues = function returnVals() {
//   const salesTotal = saleValue;
//   return salesTotal / project.assignedUsersList.length;
// }

const handleStageThreeSubmit = async (e) => {
  e.preventDefault()

  const billOfSale = { 
      saleValue, 
      
      // returnTotalBreakdown: ReturnSalesSplit()
  }
    await updateDocument(project.id, {
        stageThreeDetails: [{...project.stageThreeDetails, billOfSale}], 
        // finalDetails: [...project.finalDetails, stageToAdd]
    })
    if (!response.error) {
        setNewStage('');
    }
}



// const handleReturnSplitCalculation = async (e) => {
//   e.preventDefault()
  
//   const finalSplit = {

//     returnSplit: ReturnSalesSplit()
//   }

//   await updateDocument(project.id, {


//     stageThreeDetails: [{...project.confirmStageEnd, finalSplit}], 
//     // finalDetails: [...project.finalDetails, stageToAdd]
// })

// if (!response.error) {
//     setNewStage('');
// }

// }


    return ( 
        
        <div>    
          {/* <CustomBox></CustomBox>   
          <CustomTableContainer></CustomTableContainer> 
          <CustTextField></CustTextField>
          <FormBox></FormBox> */}
          
          <FormContainer >

                <div className='progress-bar-div'>
                  {/* <progress max="3" value={page} /> */}
                </div>
                {/* FIRST PAGE / STAGE OF M/T FORM */}
                {page === 1 &&
                
                <NewForm  onSubmit={handleStageOneSubmit} key={formFieldDefault}>
                            <CustSpan>
                              <table>
                                <thead> <h4> Remaining Ship Cargo Capacity </h4> </thead>
                                <tbody>
                                  <ul>{remainingCapacity} cSCU</ul>
                                  <ul>{LowCapacityWarning}</ul>
                                </tbody>
                              </table>
                            </CustSpan>
                    <label>
                      <h1>Additional Stages</h1>
                    <div>
                    {/* <div className='progressbar'></div> */}
                  
                    <label>
                      <span>Additional Minerals:</span>
                      <Select onChange={(e) => setNewMinerals(e)} options={newMinerals} isMulti/>
                    </label>
                    <div>
                      <Form.Field>
                        <span>Quantitiy Mined:</span>
                        <Form.Input  type='text' placeholder='Quantity in cSCU'  onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
                      </Form.Field>
                      <Form.Field>
                        <span>Processing Duration:</span>
                        <Form.Input   placeholder='Estimated Duration' onChange={(e) => setDuration(e.target.value)} value={duration}/>
                      </Form.Field>
                      <Form.Field>
                          <span>Scheduled Completion Date:</span>
                          <Form.Input   required type='date' onChange={(e) => setDueDate(e.target.value)} value={dueDate}/>
                      </Form.Field>
                      <label>
                        <span>Refinement Method:</span>
                        <Select onChange={(e) => setRefinementType(e)} options={refinement} isMulti/>
                      </label>                       
                    </div>    
                        <NewForm  onSubmit={handleStageOneSubmit}>
                        <label htmlFor="">
                    {/* <span>Set Due Date:</span>
                    <Form.Input required type='date' onChange={(e) => setDueDate(e.target.value)}
                    value={dueDate} /> */}

                      </label>
                    <label>
                      <span>Add new comment:</span>
                      <textarea
                        onChange={(e) => setNewStage(e.target.value)}
                        value={newStage}
                      ></textarea >
                    </label>
                   
                  </NewForm>
                        <Button color='teal'>Add Stage</Button>
                </div>
                
                </label>
       
                    {project.additionalDetails.length > 0 && project.additionalDetails.map(detail => (
                      <CustomBox>
                      <CustomTableContainer>
                      <MediaQuery  minWidth={992}>
                      <ul key={detail.id}>
                        
                        
                          <p>Added By: {detail.displayName}</p>
                        
                        <div >
                      <p>Created on: {detail.createdAt.toDate().toDateString()}</p>
                        </div>
                        
                          {/* <p>{detail.content}</p> */}
                          
                          
                            <Table >
                                <Table.Header>
                                  <Table.Row>
                                    <Table.Cell align="center">Yield Quantity</Table.Cell>
                                    <Table.Cell align="center">Refinement Method</Table.Cell>
                                    <Table.Cell align="center">Duration</Table.Cell>
                                    <Table.Cell align="center">Stage ID</Table.Cell>
                                    <Table.Cell align="center">Comments</Table.Cell>
                                    {/* <Table.HeaderCell>Ship: {detail.ship}</Table.HeaderCell> */}
                                    <Table.Cell align="center">Minerals</Table.Cell>
                                    {/* <Table.Cell align="center">Created At</Table.Cell> */}
                                    <Table.Cell align="center">Due</Table.Cell>
                                  </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                
                                  <Table.Cell align="center">{detail.quantity} cSCU</Table.Cell>
                                  <Table.Cell align="center">{detail.refinementType.map((refinementMethodUsed) => {
                                      return (
                                        <li>{refinementMethodUsed.value}</li>
                                      )
                                    })}
                                    </Table.Cell>
                                  <Table.Cell align="center">{detail.duration} Hours</Table.Cell>
                                  <Table.Cell align="center">{detail.id}</Table.Cell>
                                  <Table.Cell align="center">{detail.content}</Table.Cell>
                                  <Table.Cell align="center">{detail.displayMinerals.map((mineralList) => {
                                      return(
                                        <li>{mineralList.value}</li>
                                      )
                                    })}
                                    </Table.Cell>
                                  {/* <Table.Cell>{detail.createdAt.toDate().toDateString()}</Table.Cell> */}
                                  <Table.Cell align="center">{detail.dueDate.toDate().toDateString()}</Table.Cell>
                                

                                </Table.Body>
                              </Table>
                              
                              </ul>
                      </MediaQuery>
                        </CustomTableContainer>

                              
                        <SmallTableContainer>
                        <MediaQuery minWidth={768} maxWidth={991}>
                      <Table>
                      <Table.Header>
                        <Table.Row>
                          <Table.Cell align="center">Yield Quantity</Table.Cell>
                          <Table.Cell align="center">Minerals</Table.Cell>
                          <Table.Cell align="center">Due</Table.Cell>
                          <Table.Cell align="center">Status</Table.Cell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Cell align="center">{detail.quantity} cSCU</Table.Cell>
                        <Table.Cell align="center">{detail.displayMinerals.map((mineralList) => {
                            return(
                              <li>{mineralList.value}</li>
                            )
                          })}
                          </Table.Cell>
                        {/* <Table.Cell>{detail.createdAt.toDate().toDateString()}</Table.Cell> */}
                        <Table.Cell align="center">{detail.dueDate.toDate().toDateString()}</Table.Cell>
                        <Table.Cell align="center"><Icon name='checkmark' size='large'/></Table.Cell>
                      </Table.Body>
                      </Table>
                    </MediaQuery>
                        </SmallTableContainer>
                      
                      
                      
                      </CustomBox>
                      
                      
                    ))}

                <Button className='next-page-button' color='teal' onClick={NextPage}>Next Page</Button>
                
                
                
                </NewForm>
  
                }
                
                <div>
                  
              {/* <Button><Link to="/DeliveryConfirmation" className={styles['link-text']}>Next Step</Link></Button>     */}
                   
               
              {/* {page === 2 && <TradeDetailsForm />} */}
              {page === 2 && 
              <Form onSubmit={handleStageTwoSubmit} >
              
                 
                 <div className='details-container'>
                     
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
                 
                 <Button color='blue' inverted className='project-button-styles' >Confirm Logistics</Button>
                 <div>
                 <Button color='teal' onClick={NextPage}>Next Page</Button>
                 </div>
              
              </Form>
              }
              {page === 3 && 
              <Form  onSubmit={handleStageThreeSubmit} >
                <Form.Field>
                    <span className='project-details'>Total Sale Value: </span>
                    <input className='' placeholder='Sale Amount in aUEC'  onChange={(e) => setSaleValue(e.target.value)} value={saleValue}/>
                    <label>Confirm Financial Details</label>
                    <Segment>{(saleValue / project.assignedUsersList.length)}</Segment>
                {/* <Segment><p>{totalSplitPerPerson}</p></Segment> */}
                {/* <Segment><p>{returnTotalBreakdown}</p></Segment> */}
                {/* <Segment><ul>{ReturnSalesSplit}</ul></Segment> */}
                
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

              
                
               
                                    
                
            </FormContainer>
                
                
            {/* <StageOne /> */}
            
                
        </div>

        
    )

}

