import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CurrentSpendChart() {
    // Sample data for line chart
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Spending',
                data: [200, 400, 300, 500],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    // Add scales and the total spending
    const options = {
        scales: {
            y: { beginAtZero: true },
            x: { title: { display: true, text: 'Time (Weeks)' } }
        },
        plugins: {
            title: {
                display: true,
                text: 'Total Monthly Spending: $1400'   // TODO : Update dynamically
            }
        }
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
}

export default CurrentSpendChart;
