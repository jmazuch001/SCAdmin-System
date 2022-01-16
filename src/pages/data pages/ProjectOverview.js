import React from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from '../data pages/Project.css'
import { Container, Table } from 'semantic-ui-react'
export default function ProjectOverview( { project } ) {
    return (
        <div className={styles['img-fluid']}>
            {/* <Sidebar /> */}
            
            <div className="project-overview">
                <h2 className="page-title">{project.name}</h2>
                <p className="due-date">
                    Project Due By {project.dueDate.toDate().toDateString()}
                </p>
                <p className="details">
                    {project.details}
                </p>
                <h4>Project is assigned to:</h4>
                <div className='assigned-users'>
                {project.assignedUsersList.map(user => {
                    return(
                        <div key={user.id}></div>
                    )
                    })}
            </div>
            </div>
            
        </div>
    )
}
