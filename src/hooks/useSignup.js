import { useState } from 'react'
import { projectAuth } from '../firebase/config'


export const useSignup = () => {
    // we want a null state when we first use this hook
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

// create a function for whenever we want to sign a user up
// want to wait until after the form has been filled out before invoking
// so we use async javascript

const signup = async (email, password, displayName) => {
    // there are specific properties that firebase allows us to use
    // displayName is one of those properties

    setError(null)
    setIsPending(true)

    try {
        // signup user
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    console.log(res.user)

    if (!res) {
        throw new Error('Could not complete signup')
    }

    // add display name to user
    // await res.user.updateProfile({displayName: displayName})
    await res.user.updateProfile({displayName})

    setIsPending(false)
    setError(null)

    }
    catch (err) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
    }

}

return { error, isPending, signup}

}

