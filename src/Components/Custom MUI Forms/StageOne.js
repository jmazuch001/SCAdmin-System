import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from "react-responsive";
import { RoundedButton } from './MultiStage Forms/CustButton';

import {Form, Container, Input} from 'semantic-ui-react'

export function SUIStageOne() {
  return (
    <div>
      <Container>
        <NewForm>
            <NewForm.Group widths="equal">
              <h1>Step 1</h1>
                <NewForm.Field widths='equal'>
                  <label>Enter Amount</label>
                  <NewForm.Input placeholder="Enter Amount"/>
                  <NewForm.Input label='First name' placeholder='First name'/>
                </NewForm.Field>
            </NewForm.Group>
            <RoundedButton>Text</RoundedButton>
          </NewForm>
      </Container>
    </div>
  );
}


const NewForm = styled(Form)`
    background-color: orange;
    text-align: center;
    padding: 1rem;
    /* width: 50%; */
    margin: 4rem 4rem 4rem 4rem;
    /* display: flex; */
    transition-property: all;
    /* background: lightgray; */
    border-radius: 15px;
    border-top: 2px solid rgb(89, 250, 156);
    border-bottom: 2px solid rgb(89, 250, 156);
    background-color: rgb(1, 12, 12, 1.0);
    /* background: linear-gradient(
      25deg,
      rgba(128, 128, 128, 1) 0%,
      rgba(56, 56, 56, 1) 49%,
      rgba(113, 113, 113, 1) 84%
    ); */

    /* background: rgb(31,31,31); */
    /* background: linear-gradient(25deg, rgba(31,31,31,1) 0%, rgba(0,0,0,1) 42%, rgba(13,37,0,1) 53%, rgba(0,0,0,1) 64%, rgba(22,22,22,1) 100%); */
    /* background-color: rgb(1, 12, 12, 0.2); */
    color: lightgreen;
    text-shadow: 0px 1px 2px #E0E0E0;
    box-shadow: rgba(10, 100, 93, 0.65) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    @media (max-width: 768px) {
      /* display: none; hides the component once it hits this viewport size */
      /* display: flex; */
      /* background-color: lightgray; */
      /* background: linear-gradient(
        25deg,
        rgba(128, 128, 128, 1) 0%,
        rgba(56, 56, 56, 1) 49%,
        rgba(113, 113, 113, 1) 50%
      ); */
      /* background-color: rgb(1, 12, 12, 1.0); */

      text-align: center;
      overflow: hidden;
      border-radius: 15px;
      margin: auto;     
      color: #BCFFB7;
      border-end-start-radius: 80px 80px;
      text-shadow: 0px 1px 2px #E0E0E0;
      box-shadow: rgba(10, 70, 93, 0.65) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      /* opacity: 90%; */
      /* -webkit-box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71);
      -moz-box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71);
      box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71); */
      
    }
  
    h1 {
      text-align: center;
      color: white;
    }

  `;

  const NewInput = styled(Input)`
  padding: 8px;


  `