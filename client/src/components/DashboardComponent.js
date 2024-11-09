import React from 'react';
import CurrentSpendChart from './DashboardComponents/CurrentSpendChart';
import AccountsTable from './DashboardComponents/AccountsTable';
import TransactionsList from './DashboardComponents/TransactionsList';

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
