import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false) 
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)
        
        // signing the user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            // signIn method takes two args - email and password, pass into async above

            // update online status in fs database
            await projectFirestore.collection('users').doc(res.user.uid)
                .update({ online: true })


            // dispatch logout event
            dispatch({ type: 'LOGIN', payload: res.user })

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

    return { login, error, isPending }

}

// export default useLogout;