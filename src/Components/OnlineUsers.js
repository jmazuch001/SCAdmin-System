import React, {useState, Component} from 'react'
import { useCollection} from '../hooks/useCollection'
import { Menu } from 'semantic-ui-react'
import {Icon} from 'semantic-ui-react'
import AdjustIcon from '@mui/icons-material/Adjust';

// styles
import styles from './OnlineUsers.css'



export default function OnlineUsers() {
    const { error, documents } = useCollection('users');
    return (
        <div className={styles['users-list']}>
            <li>
            <p>Currently Online</p>
            {/* access users through collection */}
            {error && <div className='error'>{error}</div>}
            {documents && documents.map(user => (
                <div key={user.id} className='users-list-item'>
                    {user.online && <AdjustIcon className='circle'></AdjustIcon>}
                    <span>{user.displayName}</span>
                </div>
                
            ))}
            </li>
        </div>

    );
}