import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        // signing the user out
        try {
            await projectAuth.signOut()

            // dispatch logout event
            dispatch({ type: 'LOGOUT' })

            setIsPending(false)
            setError(null)
        }
        catch(err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { logout, error, isPending }

}

