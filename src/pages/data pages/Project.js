import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'

// key imports
import { Container } from 'semantic-ui-react'

// styles
import './Project.css'

// data display page
export default function Project () {
const { id } = useParams()
const { error, document } = useDocument('lifecycles', id)

if (error) {
    return <div className="error">{error}</div>
}
if (!document) {
    return <div className='loadings'>Loading..</div>
}

    return(
        
        <div className='project-details'>
            <h1>{document.name}</h1>
        </div>
        
    )
}

// projects

// tasks

// upcoming / pending jobs and assignments

// upcoming events