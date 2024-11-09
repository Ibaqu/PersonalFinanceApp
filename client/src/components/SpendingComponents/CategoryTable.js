import React from 'react';
import { transactions } from '../../data/sampledata';

function CategoryBreakdownTable() {
    // Calculate spending per category
    const categories = transactions.reduce((acc, transaction) => {
        acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
        return acc;
    }, {});

    return (
        <div className="category-table">
            <h2>Category Breakdown</h2>
            <table>
                <thead><tr><th>Category</th><th>Amount Spent</th></tr></thead>
                <tbody>
                {
                    Object.entries(categories).map(([category, amount], index) => (
                        <tr key={index}>
                            <td>{category}</td>
                            <td>${amount.toFixed(2)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default CategoryBreakdownTable;
