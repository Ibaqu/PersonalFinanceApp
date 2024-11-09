import React from 'react';
import CurrentSpendChart from './CurrentSpendChart';
import AccountsTable from './AccountsTable';
import TransactionsList from './TransactionsList';

function DashboardComponent() {
    return (
        <div>
            <h1>Dashboard</h1>
            <CurrentSpendChart />
            <AccountsTable />
            <TransactionsList />
        </div>
    );
}

export default DashboardComponent;
