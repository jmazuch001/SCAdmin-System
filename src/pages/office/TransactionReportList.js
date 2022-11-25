import React from 'react'

import styles from '../office/office.module.css'


export default function TransactionReportList( { transactions } ) {
    

    return (
        <ul className={styles.transactions}>
            {transactions.map((transaction) => {
                // taking id prop and using for listing transaction by id
                return (
                    <li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>aUEC {transaction.amount}</p>  
                    
                </li>
                )
                
            })}
            
            
        </ul>
    )
}
