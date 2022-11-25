import React from 'react'
import styles from './Dashboard.module.css'
import { useCollection } from '../../hooks/useCollection'
import { Grid, Container, Segment, Divider, Table } from 'semantic-ui-react'
import ProjectList from '../../Components/ProjectList'
import UserProfiles from '../../pages/data pages/UserProfiles'
import ProfileList from '../../Components/ProfileList'
// getting realtime information about the db collections and list on page


export default function profileDashboard() {
    // retrieve specific collection
    const { profileDocuments, profileError } = useCollection('user-profiles')
    const { documents, error } = useCollection('user-profiles')


    return (
        <div className='img-fluid'>
            <h2>Profiles</h2>
            {profileError && <p className='error'>{profileError}</p>}
            {/* output docs if you have any */}
            {profileDocuments && <ProfileList profiles={profileDocuments} />}
        </div>
    )
}