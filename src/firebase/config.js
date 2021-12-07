import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// initialize service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()


export {projectFirestore, projectAuth}



