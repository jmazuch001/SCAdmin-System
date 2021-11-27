import styles from './login.module.css'

import React, {useState, Component} from 'react';
import { FloatingLabel, Form, Control, Button, Group } from 'react-bootstrap'
import { Container } from '@material-ui/core'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        // prevent default action of page reload
        e.preventDefault()
        console.log(email, password)
    }
    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange = {(e) => setEmail(e.target.value)}
                    value={email}
                    
                />
                
            </label>
            <label>
                <span>Password</span>
                <input type="password" onChange = {(e) => setPassword(e.target.value)}
                value = {password}
                />
                
            </label>
            <button className="btn">Login</button>
        </form>
    )
}

// change to quotes for login form so as not to be seen as subtraction