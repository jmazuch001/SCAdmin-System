import React, {useState, Component} from 'react'
import { useCollection} from '../hooks/useCollection'
import { Menu } from 'semantic-ui-react'
import {Icon} from 'semantic-ui-react'

// styles
import styles from './OnlineUsers.css'



export default function OnlineUsers() {
    const { error, documents } = useCollection('users');
    return (
        <div className={styles['users-list']}>
            <p>Currently Online</p>
            {/* access users through collection */}
            {error && <div className='error'>{error}</div>}
            {documents && documents.map(user => (
                <div key={user.id} className='users-list-item'>
                    {user.online && <Icon className='circle'></Icon>}
                    <span>{user.displayName}</span>
                </div>
            ))}
        </div>

    );
}