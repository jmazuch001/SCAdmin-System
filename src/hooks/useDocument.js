import { useEffect, useState } from 'react' 
import { projectFirestore } from '../firebase/config'


export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)


// live data for document
useEffect(() => {
    // listener
    // id is the document we want a reference to, which is also passed in as an arg
    const reference = projectFirestore.collection(collection).doc(id)

    // every time we need realtime data, it fires a function 
    // snapshot arg represents the reference to the object above in 'reference'
    const unsubscribe = reference.onSnapshot((snapshot) => {
        
        if (snapshot.data()) {
            // any time the data changes, the snapshot object is used to get the realtime data
            setDocument({ ...snapshot.data(), id: snapshot.id })
            setError(null)
        }
        else {
            setError('Document does not exist.')
        }
    
        
    }, (err) => {
        console.log(err.message)
        setError('failed to get document')
    })

// cleanup function to unsubscribe from this when we leave the page
    return() => unsubscribe()

}, [collection, id])

    return { document, error }

}