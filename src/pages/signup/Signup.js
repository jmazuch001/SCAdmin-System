import styles from './signup.module.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        // prevent default action of page reload
        e.preventDefault()
        signup(email, password, displayName)
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
            {!isPending && <button className="btn button">signup</button>}
            {isPending && <button className="btn" disabled>loading</button>}
            {error && <p>{error}</p>}
        </form>
        </div>
    )
}