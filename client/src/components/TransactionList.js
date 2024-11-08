import React from 'react';
import { transactions } from '../data/sampledata';

function TransactionList() {
    return (
        <div>
            <h2>Transactions for November</h2>
            <table className="transaction-table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{new Date(transaction.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}</td>
                        <td>{transaction.name}</td>
                        <td>${transaction.amount.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionList;
