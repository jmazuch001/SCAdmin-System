import React from 'react'
import styles from '../Components/MiningAndTradeForm.module.css'
import { Button } from 'semantic-ui-react'

export default function MiningAndTradeDetailsForm() {
  return (
    <div className='form'>
       <div className='progressbar'></div> 
       <div className='form-container'>
           <div className='header'></div>
           <div className='body'></div>
           <div className='footer'>
               <Button>Previous</Button>
               <Button>Next</Button>
           </div>
       </div>
    </div>
  )
}
