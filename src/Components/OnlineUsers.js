import React, {useState} from 'react'
import { useCollection, projectFirestore, projectAuth } from '../hooks/useCollection'


// styles
import styles from './OnlineUsers.css'



export default function OnlineUsers() {
    const { error, documents } = useCollection('users');
    return (
        <div className={styles['users-list']}>
            
            {/* access users through collection */}
            {error && <div className='error'>{error}</div>}
            {documents && documents.map(user => (
                <div key={user.id}>
                    <span>{user.displayName}</span>
                </div>
            ))}
        </div>

    );
}