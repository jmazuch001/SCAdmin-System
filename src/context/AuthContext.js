import { createContext, useReducer } from 'core-js/library/fn/reflect/es7/metadata'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        
        default: 
            return state
    }
}

// custom auth context component
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

// dispatch function will be used for the hooks concerning logging in/out