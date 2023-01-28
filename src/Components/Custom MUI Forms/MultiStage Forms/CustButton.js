import React from 'react'
import Button from '@mui/material/Button';
import styled from 'styled-components'
// export default function CustButton() {
//   return (
//     <CornerButton></CornerButton>
//   )
// }

export const DefaultButton = styled.button`
    text-align: center;
    background: transparent;
    color: white;
    border: 1px solid coral;
    border-radius: 0.25rem;
    text-transform: capitalize;
    padding: 0.25rem;
    display: block;
    width: 200px;
    margin: 1rem auto;
`



export const CornerButton = styled(DefaultButton)`
background-color: coral;
  color: white;
  border: none;
  padding: 5px;
  font-size: 20px;
  height: 60px;
  width: 120px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 30%;
  margin-left: auto;
    margin-right: auto;
`
