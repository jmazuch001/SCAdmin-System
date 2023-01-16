import React from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from '../data pages/Project.css'
import { Container, Table } from 'semantic-ui-react'
import AdminWorkflows from '../office/AdminWorkflows'
import { useFirestore } from '../../hooks/useFirestore'
// library components
import { Grid, Button } from 'semantic-ui-react'
import FirstStage from '../create/FirstStage'
import ProjectStages from './ProjectStages'
import Reporting from '../office/Reporting'
import { Toolbar } from '@mui/material'

export default function ProjectOverview( { project } ) {
// states
// const [stages, setStages] = useState('');

    return (
        <div className={styles['img-fluid']}>
            {/* <Sidebar /> */}
            
            <div className='project-overview'>
            <Toolbar/>
                {/* <h1 className="page-title">{project.name}</h1>
                <p>Job Group: {project.job.value}</p>
                <p className="due-date">
                    Project Due By: {project.dueDate.toDate().toDateString()}
                </p>
                <p className="ship-selection">Carrier Ship: {project.carrierShip.value}</p>
                <p className="ship-selection">Max Cargo Capacity: {project.carrierShip.capacity}</p>
                <p className="details">
                    {project.details}
                </p> */}
                <Table celled >
                    <Table.Header>
                        <Table.Row  >
                            <Table.HeaderCell>Job Group: {project.job.value}</Table.HeaderCell>
                            <Table.HeaderCell>Project Due By: {project.dueDate.toDate().toDateString()}</Table.HeaderCell>
                            <Table.HeaderCell>Carrier Ship: {project.carrierShip.value}</Table.HeaderCell>
                            <Table.HeaderCell>Max Cargo Capacity: {project.carrierShip.capacity}</Table.HeaderCell>
                            <Table.HeaderCell>{project.details}</Table.HeaderCell>
                            <Table.HeaderCell><h4>Project is assigned to:</h4>
                                {project.assignedUsersList.map(user => {
                                    return(
                                        <div key={user.id}>
                                    <ul>
                                        {user.displayName}
                                    </ul>
                                        </div>
                                    )})}
                                    {/* <button className='btn'>Mark As Complete</button> */}
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
            </div> 
        </div>
    )
}
