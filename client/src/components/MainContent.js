import React from 'react';
import CategoryPieChart from './CategoryPieChart';
import TransactionList from './TransactionList';

function MainContent() {
    return (
        <main>
            <CategoryPieChart />
            <TransactionList />
        </main>
    );
}

export default MainContent;
