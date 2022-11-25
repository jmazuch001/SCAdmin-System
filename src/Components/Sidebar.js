import React, { useState, useEffect } from 'react'
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

import { withRouter } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import CreateProject from '../pages/create/CreateProject';
import OnlineUsers from './OnlineUsers';
import styles from './Sidebar.module.css'
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



export default function SideNav () {
  

  return (
    
    <div className={styles.sidebar}>
      <div className={styles['sidebar-content']}>
        <div className={styles.user}>
          {/* avatar & username here later */}
          <p>Hey user</p>  
        </div>  
        <nav className={styles.links}>
          <ul>
            <li>
              <NavLink exact to="/">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/CreateProject">
                <span>New Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Dashboard'>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Reporting'>
                <span>Reporting</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
)
  }


{/* <div>


  <Sidebar.Pushable className='sidebar-content'>
    <Sidebar
      as={Menu}
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <NavLink to='/'>
        <Menu.Item as='a'>
        <Icon name='home' />
          Home
        </Menu.Item>
      </NavLink>
      <NavLink to='/Dashboard'>
        <Menu.Item as='a'>
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>
      </NavLink>
      <NavLink to='/CreateProject'>
        <Menu.Item as='a'>
          <Icon name='book' />
          Workflows
        </Menu.Item>
      </NavLink>
      <NavLink to='/Finances'>
        <Menu.Item as='a'>
          <Icon name='money bill alternate outline' />
          Finances
        </Menu.Item>
      </NavLink>
      <NavLink to='/Reporting'>
        <Menu.Item as='a'>
          <Icon name='line graph' />
          Reporting
        </Menu.Item>
      </NavLink>
      <NavLink to='/UserProfiles'>
        <Menu.Item as='a'>
          <Icon name='address book outline' />
          User Profiles
        </Menu.Item>
      </NavLink>
      <Menu.Item>
       <OnlineUsers /> 
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Container basic>
        <Header as='h3'>Create New Workflow</Header>
            asdfasdfasdf
      </Container>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  <div className='sidebar'>
    <div className='sidebar-content'>
      <div className='user'>
        Hello
      </div>
      <nav className='tabs'>
        <ul>
          <li>
          <NavLink to='/UserProfiles'>
            <span>User Profiles</span>
          </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  </div> */}


