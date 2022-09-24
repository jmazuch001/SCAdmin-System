// import './ProjectList.css'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Avatar } from '@mui/material'
// import { Checkbox } from 'semantic-ui-react'
// import { useFirestore } from '../hooks/useFirestore'
// import { useAuthContext } from '../hooks/useAuthContext'

// export default function ProjectList({ profiles }) {
//     const { deleteDocument } = useFirestore('user-profiles')
//     const { user } = useAuthContext()

//     const handleClick = (e) => {
//         deleteDocument(profiles.id)
    
//     }

//     return (
//         <div className='project-list'>
//             {profiles.length === 0 && <p>No projects as of yet!</p>}
//             {profiles.map(profile => (
                
//                 <Link to={`/user-profiles/${profile.id}`} key={profile.id}>
                    
//                     <h4>{profile.name}</h4>
//                     <h4>{profile.details}</h4>
//                     {/* due date is a firestore timestamp at this point */}
//                     <p>Due by {profile.dueDate.toDate().toDateString()}</p>
//                     {/* we want to take that and convert and output in browser */}
//                     <div className='assigned-to'></div>
//                     {/* map through assigned users list props on each project */}
//                     <ul>
//                         {profile.assignedUsersList.map(user => (

//                             <li key={user.displayName}>
//                                 <span>{user.displayName}</span>
                                
//                             </li>
//                         ))}
//                     </ul>
//                 </Link>
//             ))}
//         </div>
//     )
// }

// // {documents && documents.map(doc => (
// //     <li key={doc.id}>{doc.name}</li>
// //         ))}