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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MediaQuery from "react-responsive";
import { CustomBox, CustomTableContainer } from '../../Components/Custom MUI Tables/MUITable'
export default function ProjectOverview( { project } ) {
// states
// const [stages, setStages] = useState('');

    return (
        <div style={{padding: '2rem'}}>
            <CustomBox>
                <CustomTableContainer component={Paper}>
                    <h1>Project Overview</h1>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><h4>Job Group</h4></TableCell>
                                {/* <TableCell align="center">Project Due By</TableCell> */}
                                <TableCell align="center"><h4>Carrier Ship</h4></TableCell>
                                <TableCell align="center"><h4>Max Cargo Capacity</h4></TableCell>
                                <TableCell align="center"><h4>Project Name</h4></TableCell>
                                <TableCell align="center"><h4>Project Assignees</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableCell align="center">{project.job.value}</TableCell>
                            {/* <TableCell align="center">{project.dueDate.toDate().toDateString()}</TableCell> */}
                            <TableCell align="center">{project.carrierShip.value}</TableCell>
                            <TableCell align="center">{project.carrierShip.capacity}</TableCell>
                            <TableCell align="center">{project.details}</TableCell>
                            <TableCell align="center">{project.assignedUsersList.map(user => {
                                                        return(
                                                            <div key={user.id}>
                                                                <ul>{user.displayName}</ul>
                                                            </div>
                                                        )})}          
                            </TableCell>
                        </TableBody>
                        <MediaQuery query="(max-device-width: 1024px)">
                        <p>This is a MQ Test</p>
                        </MediaQuery>
                    </Table>
                </CustomTableContainer>
            </CustomBox>
        </div>
    )
}
