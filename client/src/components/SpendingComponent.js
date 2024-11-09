import React from 'react';
import SpendingCategoryChart from './SpendingComponents/SpendingCategoryChart';
import CategoryTable from './SpendingComponents/CategoryTable';

function SpendingComponent() {
    return (
        <div>
            <h1>Spending Component</h1>
            <SpendingCategoryChart />
            <CategoryTable />
        </div>
    );
}

export default SpendingComponent;
