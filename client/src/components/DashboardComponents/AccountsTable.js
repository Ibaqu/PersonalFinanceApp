import React from 'react';

function AccountsTable() {

    // Sample account data
    const accounts = [
        { type: 'Checking', balance: 1500 },
        { type: 'Savings', balance: 4000 }
    ];

    return (
        <div>
            <h2>Accounts</h2>
            <table>
                <thead><tr><th>Account Type</th><th>Balance</th></tr></thead>
                <tbody>
                {
                    // Iterate through the `accounts` array using map
                    accounts.map(account => (
                        // Apply value of account array into each row
                            <tr>
                                <td>{account.type}</td>
                                <td>${account.balance}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default AccountsTable;
