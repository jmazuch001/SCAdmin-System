import React, { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../Components/TransactionForm.css'
import AdminWorkflows from '../pages/office/AdminWorkflows';

export default function TransactionForm( { uid } ) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('reports')
  
  
  // function GenerateCaseID() {
  //   const activity = [
  //     {
  //       key: 'Mining & Trade', 
  //       text: 'Mining & Trade',
  //       value: 'Mining & Trade'
  //     }, 
  //     {
  //       key: 'Mining Only', 
  //       text: 'Mining Only',
  //       value: 'Mining Only'
  //     }, 
  //     {
  //       key: 'Trade Only', 
  //       text: 'Trade Only',
  //       value: 'Trade Only'
  //     }, 
  //     {
  //       key: 'Salvage & Trade', 
  //       text: 'Salvage & Trade',
  //       value: 'Salvage & Trade'
  //     }, 
  //     {
  //       key: 'Salvage Only', 
  //       text: 'Salvage Only', 
  //       value: 'Salvage Only' 
  //     }, 
  //   ]
  //   for (let count = 0; count < activity.length; count++) {
  //     if(activity == {key: 'Mining & Trade'}) {
  //       return 
  //     }
  //   }
    
  // }
  // useFirestore reference is const addDocument
  const handleSubmit = (e) => {
    // want to prevent default action of page reload
    e.preventDefault()
  
    addDocument({ 
      uid,
      name, 
      amount 
      
    })
  }

  // clears transaction form upon submission
  useEffect(() => {
    if(response.success){
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
<>
    <h3>Add a Transaction</h3>
    <form onSubmit={handleSubmit}>
      <label>
        <span>Transaction Name: </span>
        <input 
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        >
        </input>
      </label>
      <label>
        <span>Amount (aUEC):</span>
        <input 
          type="number"
          required
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        >
        </input>
      </label>
      <button>Add Transaction</button>
    </form>
      
</>

  )
}









