import styles from './login.module.css'

import React, {useState, Component} from 'react';
import { FloatingLabel, Form, Control, Button, Group } from 'react-bootstrap'
import { useLogin } from '../../hooks/useLogin'
import { Container } from '@material-ui/core'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()
    
    const handleSubmit = (e) => {
        // prevent default action of page reload
        e.preventDefault()
        login(email, password)
    }
    return (
        <div className={styles['login-body']}>
            
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h2 className={styles.login}>Login</h2>
            <label className={styles.label}>
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
            {!isPending && <button className="btn button">Login</button>}
            {isPending && <button className='btn' disabled>loading</button>}
            {error && <p>error</p>}
        </form>
        </div>
    )
}

// change to quotes for login form so as not to be seen as subtraction