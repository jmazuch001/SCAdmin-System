import React from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from '../data pages/Project.css'
import { Container, Table } from 'semantic-ui-react'
import AdminWorkflows from '../office/AdminWorkflows'
// library components
import { Grid, Button } from 'semantic-ui-react'
import FirstStage from '../create/FirstStage'
import ProjectStages from './ProjectStages'

export default function ProjectOverview( { project } ) {
// states
// const [stages, setStages] = useState('');

    return (
        <div className={styles['img-fluid']}>
            {/* <Sidebar /> */}
            
            <div className="project-overview">
                <h1 className="page-title">{project.name}</h1>
                <p>Job Group: {project.job.value}</p>
                <p className="due-date">
                    Project Due By: {project.dueDate.toDate().toDateString()}
                </p>
                <p className="details">
                    {project.details}
                </p>

                
                {/* <h4>Project Created By:</h4>
                <div className='assigned-users'>
                {project.assignedUsersList.map(user => {
                    return(
                        <div key={user.displayName}> {user.displayName}</div>
                    )
                })}
                </div> */}


                <h4>Project is assigned to:</h4>
                <div className='assigned-users'>
                {project.assignedUsersList.map(user => {
                    return(
                        <div key={user.id}>
                            <ul>
                            {user.displayName}
                            </ul>
                        </div>
                    )
                })}
                </div>
            

                {/* <Container>
                    <AdminWorkflows />
                </Container>
                 */}
                 
            
            </div>
            {/* <Grid>
                 <Grid.Column verticalAlign='middle'>
                        <Button content='Sign up' icon='signup' size='big' ><ProjectStages />
                        </Button>
                    </Grid.Column>
                    </Grid> */}
                    {/* <ProjectStages /> */}
            
        </div>
    )
}
