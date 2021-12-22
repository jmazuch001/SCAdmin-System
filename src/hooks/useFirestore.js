import { useReducer, useState, useEffect } from 'react'
import { projectFirestore } from "../firebase/config"

let initialState = {
    document: null, 
    isPending: false, 
    error: null, 
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    // getting a reference to a collection on the database
    const ref = projectFirestore.collection(collection)

    // add new documents with boilerplates
    const addDocument = (doc) => {

    }

    // delete doc
    const deleteDocument = (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, []) 

    return { addDocument, deleteDocument, response }

}