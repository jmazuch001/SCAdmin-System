import './ProjectList.css'
import React from 'react'
export default function ProjectList({ projects }) {
    return (
        <div>
            {projects.length === 0 && <p>No projects as of yet!</p>}
            {projects.map(project => (
                <div key={project.id}>{project.name}</div>
            ))}
        </div>
    )
}

// {documents && documents.map(doc => (
//     <li key={doc.id}>{doc.name}</li>
//         ))}