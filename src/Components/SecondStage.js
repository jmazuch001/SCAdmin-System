import React, { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../create/CreateProject.css'
import { Container, Form } from 'semantic-ui-react'

const refineryLocations = [
  {
    value: 'ARC-L1 Wide Forest Station', 
    label: 'ARC-L1 Wide Forest Station'
  },
  {
    value: 'CRU-L1 Ambitious Dream Station', 
    label: 'CRU-L1 Ambitious Dream Station'
  },
  {
    value: 'HUR-L1 Green Glade Station', 
    label: 'HUR-L1 Green Glade Station'
  },
  {
    value: 'HUR-L2 Faithful Dream Station', 
    label: 'HUR-L2 Faithful Dream Station'
  },
  {
    value: 'MIC-L1 Shallow Frontier Station', 
    label: 'MIC-L1 Shallow Frontier Station'
  },
]

const tradingDestinations = [
  {
    value: 'Hurston - Lorville', 
    label: 'Hurston - Lorville'
  },
  {
    value: 'Cursader - Port Olisar', 
    label: 'Cursader - Port Olisar'
  },
  {
    value: 'Crusader - Orison', 
    label: 'Crusader - Orison'
  },
  {
    value: 'ArcCorp - Area 18', 
    label: 'ArcCorp - Area 18'
  },
  {
    value: 'Crusader - Grim Hex', 
    label: 'Crusader - Grim Hex'
  },
]

export default function TransactionForm( { uid } ) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('reports')
  // const { user } = useAuthContext()
  
  
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
<Container className="container-styles">
    <h3>Delivery Details</h3>
    <Form onSubmit={handleSubmit}>
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
    </Form>
</Container>
</>

  )
}









// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }