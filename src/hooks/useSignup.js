import { useState, useEffect } from 'react'
import {projectAuth, projectStorage, projectFirestore} from '../firebase/config'
import { useAuthContext } from './useAuthContext'



export const useSignup = () => {
    // we want a null state when we first use this hook
    const [isCancelled, setisCancelled] = useState(false) 
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

// create a function for whenever we want to sign a user up
// want to wait until after the form has been filled out before invoking
// so we use async javascript

const signup = async (email, password, displayName) => {
    // there are specific properties that firebase allows us to use
    // displayName is one of those properties

    if (!isCancelled) {
        setError(null)
        setIsPending(true)
    }
    

    try {
        // signup user
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
   

    if (!res) {
        throw new Error('Could not complete signup')
    }

    // add display name to user
    // await res.user.updateProfile({displayName: displayName})
    await res.user.updateProfile({ displayName })

    // create user doc / enable ID creation for manual config
    // use the doc method, will need to pass in reference to specific ID
    await projectFirestore.collection('users').doc(res.user.uid).set({
        // pass in opbj to represent the data - add props
        online: true, 
        displayName 
    })

    // dispatch login action
    dispatch({ type: 'LOGIN', payload: res.user })

    setIsPending(false)
    setError(null)

    }
    catch (err) {
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

return { error, isPending, signup}

}

