import React from 'react';

function TransactionsList() {
    const transactions = [
        {
            id: 1,
            date: '11/01',
            name: 'Groceries',
            amount: 50,
            merchantLogo: '/logoipsum-300.svg',
            categoryLogo: '/logoipsum-300.svg'
        },
        {
            id: 2,
            date: '11/02',
            name: 'Utilities',
            amount: 100,
            merchantLogo: '',
            categoryLogo: '/logoipsum-300.svg'
        },
        {
            id: 3,
            date: '11/03',
            name: 'Dining',
            amount: 30,
            merchantLogo: '/logoipsum-300.svg',
            categoryLogo: '/logoipsum-300.svg'
        }
    ];

    return (
        <div>
            <h2>Transactions for November</h2>
            <table className="transaction-table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th></th>
                    <th>Description</th>
                    <th></th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {
                    transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>
                                {transaction.merchantLogo && (
                                    <img src={transaction.merchantLogo} alt="Merchant Logo" className="logo" />
                                )}
                            </td>
                            <td>{transaction.name}</td>
                            <td>
                                {transaction.categoryLogo && (
                                    <img src={transaction.categoryLogo} alt="Category Logo" className="logo" />
                                )}
                            </td>
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
