import React from 'react'
import styles from './Dashboard.module.css'
import { useCollection } from '../../hooks/useCollection'
import { Grid, Container, Segment, Divider, Table } from 'semantic-ui-react'
import ProjectList from '../../Components/ProjectList'
import UserProfiles from '../../pages/data pages/UserProfiles'

// getting realtime information about the db collections and list on page
export default function Dashboard() {
    // retrieve specific collection
    const { documents, error } = useCollection('lifecycles')
    const { profileDocuments, profileError } = useCollection('user-profiles')
    const { completedDocuments, returnedError } = useCollection('completed lifecycles')

    return (
        <div className='img-fluid'>
            <h2>Projects In-Progress</h2>
            <h2 className='page-title'>Dashboard</h2>
            {error && <p className='error'>{error}</p>}
            {/* output docs if you have any */}
            {documents && <ProjectList  projects={documents} />}
        </div>
    )
}