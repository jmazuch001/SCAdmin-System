import { createContext, useReducer } from 'react'
import React, { useEffect } from 'react';
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_IS_READY': 
            return { ...state, user: action.payload, authIsReady: true}
        default: 
            return state
    }
}

// custom auth context component
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null, 
        authIsReady: false
    })

    // change in auth status; comm with firebase
    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged((user) => {
            dispatch({ type: 'AUTH_IS_READY', payload: user})
            unsubscribe()
        })
    }, [])

    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

// dispatch function will be used for the hooks concerning logging in/out