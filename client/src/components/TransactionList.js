import React from 'react';
import { transactions } from '../data/sampledata';

function TransactionList() {
    return (
        <div>
            <h2>Transactions for November</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <span>{transaction.date}</span> - <span>{transaction.name}</span> - <span>${transaction.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
