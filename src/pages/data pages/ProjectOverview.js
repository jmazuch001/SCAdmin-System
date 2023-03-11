import React from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from '../data pages/Project.css'

import AdminWorkflows from '../office/AdminWorkflows'
import { useFirestore } from '../../hooks/useFirestore'
// library components
import FirstStage from '../create/FirstStage'
import ProjectStages from './ProjectStages'
import Reporting from '../office/Reporting'
import { Toolbar } from '@mui/material'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { Icon, Table, Container  } from 'semantic-ui-react'
import MediaQuery from "react-responsive";
import { CustomBox, CustomPaper, CustomTableContainer } from '../../Components/Custom MUI Tables/MUITable'
export default function ProjectOverview( { project } ) {
// states
// const [stages, setStages] = useState('');

    return (
        <div style={{paddingTop: '5rem'}}>
            <CustomBox>
                <CustomTableContainer >
                    
                    <h1>Project Overview</h1>
                    <Table unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell align="center"><h4>Job Group</h4></Table.Cell>
                                {/* <Table.Cell align="center">Project Due By</Table.Cell> */}
                                <Table.Cell align="center"><h4>Carrier Ship</h4></Table.Cell>
                                <Table.Cell align="center"><h4>Max Cargo Capacity</h4></Table.Cell>
                                <Table.Cell align="center"><h4>Project Name</h4></Table.Cell>
                                <Table.Cell align="center"><h4>Project Assignees</h4></Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Cell align="center">{project.job.value}</Table.Cell>
                            {/* <Table.Cell align="center">{project.dueDate.toDate().toDateString()}</Table.Cell> */}
                            <Table.Cell align="center">{project.carrierShip.value}</Table.Cell>
                            <Table.Cell align="center">{project.carrierShip.capacity}</Table.Cell>
                            <Table.Cell align="center">{project.details}</Table.Cell>
                            <Table.Cell align="center">{project.assignedUsersList.map(user => {
                                                        return(
                                                            <div key={user.id}>
                                                                <ul>{user.displayName}</ul>
                                                            </div>
                                                        )})}          
                            </Table.Cell>
                            {/* <MediaQuery query="(max-device-width: 1024px)">
                        <></>
                        </MediaQuery> */}
                        </Table.Body>
                    </Table>
                    
                </CustomTableContainer>
            </CustomBox>
        </div>
    )
}
