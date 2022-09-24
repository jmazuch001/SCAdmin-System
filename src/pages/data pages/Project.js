import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'

// key imports
import { Container } from 'semantic-ui-react'

// styles
import styles from './Project.css'
import ProjectOverview from './ProjectOverview'
import ProjectStages from './ProjectStages'

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

console.log(document)
    return(
        <div className='img-fluid'>
            
            <ProjectOverview project={document} />
            
        
            <ProjectStages project={document}/>
            
        </div>
        
        
    )
}

// projects

// tasks

// upcoming / pending jobs and assignments

// upcoming events