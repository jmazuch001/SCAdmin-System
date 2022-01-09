import { useState, useEffect } from 'react'
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection) => {
   const [documents, setDocuments] = useState(null) 
   const [error, setError] = useState(null) 

   useEffect(() => {
    // set up realtime listener
    let ref = projectFirestore.collection(collection)

    const unsubscribe = ref.onSnapshot((snapshot) => {
        // references 'that' collection at that specific moment in time
        let results = []
        snapshot.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id})
        })

        // update the state
        setDocuments(results)
        setError(null)
    }, (error) => {
        console.log(error)
        setError('Unable to fetch data')
    })

    // unsubscribe event on unmount
    return () => unsubscribe()

   }, [collection])
   
   return { documents, error }
}