import React, { useEffect, useState } from 'react';

function AccountsTable() {
    const [accounts, setAccounts] = useState([]);

    // Fetch accounts data from the backend when the component mounts
    useEffect(() => {
        fetch('http://localhost:5000/api/accounts')
            .then(response => response.json())
            .then(data => setAccounts(data.accounts))
            .catch(error => console.error('Error fetching accounts data:', error));
    }, []);

    return (
        <div>
            <h2>Accounts</h2>
            <table>
                <thead>
                <tr>
                    <th>Account Name</th>
                    <th>Account Type</th>
                    <th>Subtype</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <tbody>
                {accounts.map((account, index) => (
                    <tr key={index}>
                        <td>{account.name}</td>
                        <td>{account.type}</td>
                        <td>{account.subtype}</td>
                        <td>${account.balance.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AccountsTable;
