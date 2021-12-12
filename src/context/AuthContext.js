import { createContext, useReducer } from 'react'
import React from 'react';

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        default: 
            return state
    }
}

// custom auth context component
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

// dispatch function will be used for the hooks concerning logging in/out