import React, { useState, useEffect } from 'react'
// import QR_Code from '../../Components/QR_Code'
// import QRCode from 'qrcode'
// import BadgeDesigner from './BadgeDesigner'
// import { projectFirestore, timestamp } from '../../firebase/config'
// import { useAuthContext } from '../../hooks/useAuthContext'
// import { useFirestore } from '../../hooks/useFirestore'
// import { useHistory } from 'react-router-dom' 
// import {Link} from 'react-router-dom'
// import TransactionForm from '../../Components/TransactionForm';
// import Project from '../data pages/Project';
// import FirstStage from '../create/FirstStage'
// import MiningAndTradeDetailsForm from '../../Components/MiningAndTradeDetailsForm';
// import AddRemoveFields from '../../Components/AddRemoveFields';
// import Select from 'react-select'
// import { Form, Checkbox, Button, Modal, Header, Step, Icon, Dropdown, Container, Grid, Table, Inpu, Progress, Divider, Label, Segment } from 'semantic-ui-react'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container
} from 'semantic-ui-react'
import OnlineUsers from '../../Components/OnlineUsers'
import { withRouter } from 'react-router-dom';



// const itemsList = [
//   // { 
//   //     text: 'QR Generator', 
//   //     icon: <GraphicEqIcon />
//   //     onClick: () => history.push('/Office'),
//   // },
//   {
//       text: 'Workflows',
//       icon: <WorkIcon />, 
//       onClick: () => history.push('/Office'), 
      
      
//   }, 
//   { 
//       text: 'User Profiles', 
//       icon: <GraphicEqIcon />,
//       onClick: () => history.push('/UserProfiles')
//   },
//   {
//       text: 'Dashboard', 
//       icon: <ListIcon />,
//       onClick: () => history.push('/Dashboard')
//   }, 
//   {
//       text: 'Analytics', 
//       icon: <InsertChartIcon />,
//       onClick: () => history.push('/Analytics')
//   }, 
//   {
//       text: 'Badging', 
//       icon: <PortraitIcon />
//   },
//   {
//       text: 'Access Controls', 
//       icon:  <LockIcon />, 
//       onClick: () => history.push('/AccessControl')
//   }, 
//   { 
//       text: 'Reporting', 
//       icon:  <AssessmentIcon />, 
//       onClick: () => history.push('/Reporting')
//   },
//   { 
//       text: 'Finances', 
//       icon: <AccountBalanceIcon />

//   }, 
//   { 
//       text: 'QR Generator', 
//       icon: <GraphicEqIcon />
//   },
//   { 
//       text: 'Test Page', 
//       icon: <GraphicEqIcon />,
//       onClick: () => history.push('/TestPage')
//   }
// ];
// styles
// import styles from 'src\pages\office\AccessControl.module.css'


// export default function AccessControl({ project }) {
//   const { updateDocument, response } = useFirestore('employee-profiles')
//   const [formError, setFormError] = useState(null)
//   const [job, setJob] = useState('');
//   const { user } = useAuthContext()
// const JobType = [
//   {
//     value: 'Salvage', 
//     label: 'Salvage'
//   }, 
//   {
//     value: 'Mining', 
//     label: 'Mining'
//   }, 
//   {
//     value: 'Trade', 
//     label: 'Trade'
//   }

// ]    




// const handleFormSubmit = async (e) => {
//   e.preventDefault()

//   const formFields = {
//       job, 
//       id: CreateID(), 
//   }

//     // perform checks
//     if(!JobType) {
//       setFormError('Please select a category')
//       return
//     }
//     if (JobType.length < 1) {
//       setFormError('Please assign the project to at least one user')
//       return
//     }

//     await updateDocument(project.id, {


//         employeeSetup: [{...project.employeeSetup, formFields}], 
//         // finalDetails: [...project.finalDetails, stageToAdd]
//     })
//     if (!response.error) {
//         setJob('');
//     }

//     // supporting functions
//     function CreateID () {
//       return "MT" + Math.floor(Math.random() * 1000); 
//    }



// }

//     return (
//         <div>
//             <Form onSubmit={handleFormSubmit}>
//             <Container >
//               <div>
//                 <span>Job Type: </span>
//                 <Select onChange={(e) => setJob(e)} options={JobType} />
                  
//               </div>
//             </Container>
//             <button className="btn">Stage Project</button>
//             {formError && <p className='error'>{formError}</p>}
//             </Form>
//         </div>
        
//     )
// }



export default function SideNav (props) {
  const { history } = props;

  return (

  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
      <Icon name='home' />
        <a onClick={() => history.push('/Office')}></a>
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='dashboard' />
        Dashboard
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='book' />
        Workflows
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='money bill alternate outline' />
        Finances
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='line graph' />
        Reporting
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='address book outline' />
        User Profiles
      </Menu.Item>
      
      <Menu.Item>
        <OnlineUsers />
      </Menu.Item>
    </Sidebar>
  
    <Sidebar.Pusher>
      <Container basic>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Container>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)
  }





// const MovieList = () => {

//   const [movies, setMovies] = useState ([
//     {
//       name: 'Harry Potter', 
//       price: '$10', 
//       id: 229944
//     }, 
//     {
//       name: 'GoldenEye', 
//       price: '$100', 
//       id: 229911
//     }
//   ]);

//   return (
//     <div>
//       {movies.map(movie => (
//       <li>{movie.name}</li>
//     ))}
//     </div>
    

//   )
// }

// export default MovieList;
