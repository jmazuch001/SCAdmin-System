import React from 'react'
import TextInput from './MultiStage Forms/CustTextField';
import Button from '@mui/material/Button';
import { FormBox } from './MultiStage Forms/CustFormComponents';
import { FormContainer } from './MultiStage Forms/CustFormComponents';

import { CornerButton } from './MultiStage Forms/CustButton';

export default function StageThree() {
  return (
    <FormBox >
        <FormContainer>
            <h1>
                Step 3
            </h1>
            <ul>
                <label>Input Field for Value Calculation Goes Here</label>
                    <TextInput></TextInput>
                <label>Returns Player Split of Sale Valuation</label>
                    <TextInput></TextInput>
            </ul>
            <div>
                <CornerButton variant="contained">Next Stage</CornerButton>
            </div>
        </FormContainer>
        
    </FormBox>
  )
}

