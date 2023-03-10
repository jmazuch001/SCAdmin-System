import React from 'react'

import styled from 'styled-components'
import {Button} from 'semantic-ui-react'

export default function SUICustButton() {
  return (
    <>
        <RoundedButton>Rounded Button</RoundedButton>
    </>
  )
}

export const RoundedButton = styled(Button)`
  /* background-color: coral; */
  color: #BCFFB7;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 29%, rgba(21,34,0,1) 100%);
  border: solid;
  padding: 5px;
  font-size: 20px;
  height: 60px;
  width: 120px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  border-radius: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  transition: 0.3s;

  &:hover {
    background: radial-gradient(circle, rgba(0,0,0,1) 24%, rgba(53,85,0,1) 100%); 
    
  }
  
`