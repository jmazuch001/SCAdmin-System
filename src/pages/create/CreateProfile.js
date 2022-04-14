import React, { useState, useEffect } from 'react'
import { projectFirestore, timestamp } from '../../firebase/config'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom' 
import {Link} from 'react-router-dom'

import Select from 'react-select'
import JobType from '../../Components/JobType'


export default function CreateProfile() {

  return (
    <div>
        <div>
            <JobType />
        </div>

    </div>
    
  )
}
