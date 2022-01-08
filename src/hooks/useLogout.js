import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false) 
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch, user } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        // signing the user out
        try {
            // update online status
            const {uid } = user
            await projectFirestore.collection('users').doc(uid).update({ online:false })  
             
            // once above await is complete, then we sign the user out with signOut()
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
        return () => setIsCancelled(true)

    }, [])

    return { logout, error, isPending }

}

// export default useLogout;