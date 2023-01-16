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
export default function ProjectOverview( { project } ) {
// states
// const [stages, setStages] = useState('');

    return (
        <div>
            <div className='project-overview'>
                <div className='project-overview-span'>
                    <p >Project Details Overview</p>
                </div>  
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Job Group</TableCell>
                        <TableCell align="center">Project Due By</TableCell>
                        <TableCell align="center">Carrier Ship</TableCell>
                        <TableCell align="center">Max Cargo Capacity</TableCell>
                        <TableCell align="center">Project Name</TableCell>
                        <TableCell align="center">Project Assignees</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell align="center">{project.job.value}</TableCell>
                    <TableCell align="center">{project.dueDate.toDate().toDateString()}</TableCell>
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
            </Table>
        </TableContainer>
            </div> 
        </div>
    )
}
