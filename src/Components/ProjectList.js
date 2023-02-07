import './ProjectList.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Checkbox } from 'semantic-ui-react'
import { useFirestore } from '../hooks/useFirestore'
import { useAuthContext } from '../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'
import GridLayout from './GridLayout'


export default function ProjectList({ projects }) {
const { deleteDocument } = useFirestore('lifecycles')
const { user } = useAuthContext()
const history = useHistory()
const handleClick = (e) => {
    deleteDocument(projects.id)
    history.push('/')

}
    return (
        <div className='project-list'>
            {projects.length === 0 && <p>No projects as of yet!</p>}
            {projects.map(project => (     
                <Link to={`/projects/${project.id}`} key={project.id}>
                    <h4>{project.name}</h4>
                    <h4>{project.details}</h4>
                    {/* due date is a firestore timestamp at this point */}
                    <p>By {project.createdBy.displayName}</p>
                    {/* <p>Due by {project.dueDate.toDate().toDateString()}</p> */}
                    {/* we want to take that and convert and output in browser */}
                    <div className='assigned-to'>
                    {/* map through assigned users list props on each project */}
                    <ul>
                        {project.assignedUsersList.map(user => (
                            <li key={user.displayName}>
                                <span>{user.displayName}</span>                                
                            </li>   
                        ))}
                    </ul>
                    </div>
                    <div>
                        {user.uid === project.createdBy.id && (
                            <button className='btn' onClick={handleClick}>Mark As Complete</button>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    )
}

// {documents && documents.map(doc => (
//     <li key={doc.id}>{doc.name}</li>
//         ))}