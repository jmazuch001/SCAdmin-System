import React from 'react'
import styles from './Dashboard.module.css'
import { useCollection } from '../../hooks/useCollection'
import { Grid, Container, Segment, Divider, Table } from 'semantic-ui-react'
import ProjectList from '../../Components/ProjectList'
// getting realtime information about the db collections and list on page
export default function Dashboard() {
    // retrieve specific collection
    const { documents, error } = useCollection('case lifecycles')

    return (
        <div>
            <h2 className='page-title'>Dashboard</h2>
            {error && <p className='error'>{error}</p>}
            {/* output docs if you have any */}
            {documents && <ProjectList projects={documents} />}
        </div>
    )
}