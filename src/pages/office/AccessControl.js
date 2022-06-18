import React from 'react'
import QR_Code from '../../Components/QR_Code'
import QRCode from 'qrcode'
import BadgeDesigner from './BadgeDesigner'


import TransactionForm from '../../Components/TransactionForm';
import Project from '../data pages/Project';
import FirstStage from '../create/FirstStage'
import CreateProfile from '../create/CreateProfile';
import AccessLevels from '../../Components/AccessLevels'
import { Form, Checkbox, Button, Modal, Header, Step, Icon, Dropdown, Container, Grid, Table, Inpu, Progress, Divider, Label, Segment } from 'semantic-ui-react'


// styles
// import styles from 'src\pages\office\AccessControl.module.css'


export default function AccessControl() {
    

    return (
        <div>
            <CreateProfile />
            <AccessLevels />
        </div>
        
    )
}

