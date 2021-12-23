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
        case 'IS_PENDING': 
            return { isPending: true, document: null, success: false, error: null }
        case 'ADDED_DOC': 
            return { isPending: false, document: action.payload, success: true, 
                    error: null }
        case 'ERROR': 
                return { isPending: false, document: null, success: false, error: action.payload }
        default: 
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    // getting a reference to a collection on the database
    const ref = projectFirestore.collection(collection)

    // only dispatch if it is not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled){
            dispatch(action)
        }
    }

    // add new documents with boilerplates
    const addDocument = (doc) => {
        dispatch( { type: 'IS_PENDING'} )

        try {
            const addedDocument = await ref.add(doc)
            dispatchIfNotCancelled({ type: 'ADDED_DOC', payload: addedDocument })
        }
        catch (err) {
            dispatchIfNotCancelled( { type: 'ERROR', payload: err.message })
        }
    }

    // delete doc
    const deleteDocument = (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, []) 

    return { addDocument, deleteDocument, response }

}