import './ProjectList.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Checkbox } from 'semantic-ui-react'


export default function ProjectList({ projects }) {
    return (
        <div className='project-list'>
            {projects.length === 0 && <p>No projects as of yet!</p>}
            {projects.map(project => (
                
                <Link to={`/projects/${project.id}`} key={project.id}>
                    
                    <h4>{project.name}</h4>
                    <h4>{project.details}</h4>
                    {/* due date is a firestore timestamp at this point */}
                    <p>Due by {project.dueDate.toDate().toDateString()}</p>
                    {/* we want to take that and convert and output in browser */}
                    <div className='assigned-to'></div>
                    {/* map through assigned users list props on each project */}
                    <ul>
                        {project.assignedUsersList.map(user => (

                            <li key={user.displayName}>
                                <span>{user.displayName}</span>
                                
                            </li>
                        ))}
                    </ul>
                </Link>
            ))}
        </div>
    )
}

// {documents && documents.map(doc => (
//     <li key={doc.id}>{doc.name}</li>
//         ))}