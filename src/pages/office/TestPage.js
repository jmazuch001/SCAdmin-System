import React, { useState, useEffect } from 'react'
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'
import BadgeDesigner from './BadgeDesigner'
import { projectFirestore, timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom' 
import {Link} from 'react-router-dom'
import TransactionForm from '../../Components/TransactionForm';
import Project from '../data pages/Project';
import FirstStage from '../create/FirstStage'
import MiningAndTradeDetailsForm from '../../Components/MiningAndTradeDetailsForm';
import AddRemoveFields from '../../Components/AddRemoveFields';
import Select from 'react-select'
import { Form, Checkbox, Button, Modal, Header, Step, Icon, Dropdown, Container, Grid, Table, Inpu, Progress, Divider, Label, Segment } from 'semantic-ui-react'


// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function AccessControl({ project }) {
  const { updateDocument, response } = useFirestore('employee-profiles')
  const [formError, setFormError] = useState(null)
  const [job, setJob] = useState('');
  const { user } = useAuthContext()
const JobType = [
  {
    value: 'Salvage', 
    label: 'Salvage'
  }, 
  {
    value: 'Mining', 
    label: 'Mining'
  }, 
  {
    value: 'Trade', 
    label: 'Trade'
  }

]    




const handleFormSubmit = async (e) => {
  e.preventDefault()

  const formFields = {
      job, 
      id: CreateID(), 
  }

    // perform checks
    if(!JobType) {
      setFormError('Please select a category')
      return
    }
    if (JobType.length < 1) {
      setFormError('Please assign the project to at least one user')
      return
    }

    await updateDocument(project.id, {


        employeeSetup: [{...project.employeeSetup, formFields}], 
        // finalDetails: [...project.finalDetails, stageToAdd]
    })
    if (!response.error) {
        setJob('');
    }

    // supporting functions
    function CreateID () {
      return "MT" + Math.floor(Math.random() * 1000); 
   }



}

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
            <Container >
              <div>
                <span>Job Type: </span>
                <Select onChange={(e) => setJob(e)} options={JobType} />
                  
              </div>
            </Container>
            <button className="btn">Stage Project</button>
            {formError && <p className='error'>{formError}</p>}
            </Form>
        </div>
        
    )
}




