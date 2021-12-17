import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [isCancelled, setisCancelled] = useState(false) 
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

            if(!isCancelled) {
                setIsPending(false)
                setError(null)
            }
            
        }
        catch(err) {
            if(!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setisCancelled(true)

    }, [])

    return { logout, error, isPending }

}

// export default useLogout;