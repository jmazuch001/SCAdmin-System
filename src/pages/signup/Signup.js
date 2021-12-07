import styles from './signup.module.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const handleSubmit = (e) => {
        // prevent default action of page reload
        e.preventDefault()
        console.log(email, password, displayName)
    }
    return (
        <div className={styles['signup-body']}>
            
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2 className={styles.signup}>Signup</h2>
            <label className={styles.label}>
                <span>email:</span>
                <input
                    type="email"
                    onChange = {(e) => setEmail(e.target.value)}
                    value={email}   
                />
            </label>
            <label>
                <span>Password:</span>
                <input type="password" onChange = {(e) => setPassword(e.target.value)}
                value = {password}
                />
                
            </label>
            <label>
                <span>Display Name:</span>
                <input type="password" onChange = {(e) => setDisplayName(e.target.value)}
                value = {displayName}
                />
                
            </label>
            <button className="btn button">signup</button>
        </form>
        </div>
    )
}