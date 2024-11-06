import React from 'react';
import {Chart, ArcElement} from "chart.js";
import { Pie } from 'react-chartjs-2';
import { transactions } from '../data/sampledata';

Chart.register(ArcElement);

function CategoryPieChart() {

    const categories = transactions.reduce((acc, transaction) => {
        acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categories),
        datasets: [
            {
                data: Object.values(categories),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    return (
        <div className="chart-container">
            <Pie data={data} />
        </div>
    );
}

export default CategoryPieChart;
