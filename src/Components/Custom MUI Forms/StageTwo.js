import React from 'react'
import TextInput from './MultiStage Forms/CustTextField';
import Button from '@mui/material/Button';
import { FormBox } from './MultiStage Forms/CustFormComponents';
import { FormContainer } from './MultiStage Forms/CustFormComponents';

import { CornerButton } from './MultiStage Forms/CustButton';


export default function StageTwo() {
  return (
    <FormBox >
        <FormContainer>
            <h1>
                Step 2
            </h1>
            <ul>
                <label>Selection Dropdown Goes Here</label>
                    <TextInput>Cargo Location</TextInput>
                <label>Selection Dropdown Goes Here</label>
                    <TextInput>Cargo Destination</TextInput>

            </ul>
            <div>
                <CornerButton variant="contained">Next Stage</CornerButton>
            </div>
        </FormContainer>
        
    </FormBox>
  )
}
