import React from 'react';

function TransactionsList() {

    // Sample transaction data
    const transactions = [
        { id: 1, date: '11/01', name: 'Groceries', amount: 50 },
        { id: 2, date: '11/02', name: 'Utilities', amount: 100 },
        { id: 3, date: '11/03', name: 'Dining', amount: 30 }
    ];

    return (
        <div>
            <h2>Transactions for November</h2>
            <table>
                <thead><tr><th>Date</th><th>Description</th><th>Amount</th></tr></thead>
                <tbody>
                {
                    // Iterate through the `transactions` array using map
                    transactions.map((transaction) => (
                        // Apply value of each transaction
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.name}</td>
                            <td>${transaction.amount}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsList;
