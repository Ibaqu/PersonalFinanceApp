import React from 'react';

function TransactionsList() {
    // Sample transaction data
    const transactions = [
        {
            id: 1,
            date: '11/01',
            name: 'Groceries',
            amount: 50,
            merchantLogo: 'https://via.placeholder.com/50', // Sample logo URL
            categoryLogo: 'https://via.placeholder.com/50' // Sample logo URL for category
        },
        {
            id: 2,
            date: '11/02',
            name: 'Utilities',
            amount: 100,
            merchantLogo: '', // No merchant logo available
            categoryLogo: 'https://via.placeholder.com/50'
        },
        {
            id: 3,
            date: '11/03',
            name: 'Dining',
            amount: 30,
            merchantLogo: 'https://via.placeholder.com/50',
            categoryLogo: 'https://via.placeholder.com/50'
        }
    ];

    return (
        <div>
            <h2>Transactions for November</h2>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Merchant Logo</th>
                    <th>Description</th>
                    <th>Category Logo</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {
                    transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            {/* Date Column */}
                            <td>{transaction.date}</td>

                            {/* Merchant Logo Column */}
                            <td>
                                {transaction.merchantLogo ? (
                                    <img src={transaction.merchantLogo} alt="Merchant Logo" width="30" height="30" />
                                ) : (
                                    <span>No Logo</span>
                                )}
                            </td>

                            {/* Description Column */}
                            <td>{transaction.name}</td>

                            {/* Category Logo Column */}
                            <td>
                                {transaction.categoryLogo ? (
                                    <img src={transaction.categoryLogo} alt="Category Logo" width="30" height="30" />
                                ) : (
                                    <span>No Logo</span>
                                )}
                            </td>

                            {/* Amount Column */}
                            <td>${transaction.amount.toFixed(2)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsList;
