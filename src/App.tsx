import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        title: {
            display: true,
            text: 'spend per category level 1',
        },
    },
};


const data2 = {
     labels : [
        'Uncategorised',
        'Purchased Goods',
        'Capital Goods',
        'Fuel- and Energy-Related Activities (Not Included in Scope 1 or Scope 2)',
        'Upstream Transportation and Distribution',
        'Waste Generated in Operations',
        'Business Travel',
        'Employee Commuting',
        'Upstream Leased Assets',
    ],
    datasets: [
        {
            label: 'Dataset 1',
            data: [7000,1000,2000,8000,9000,3000,4000,5000,6000],
            borderColor: 'rgb(11, 63, 150)',
            backgroundColor: 'rgba(82, 122, 191)',
            borderWidth: 1,
        },
        {
            label: 'Dataset 2',
            data: [1500,3300,7500,2000,1000,5500,9000,2200,6000],
            borderColor: 'rgb(217, 108, 20)',
            backgroundColor: 'rgba(217, 135, 69)',
            borderWidth: 1,
        },
    ],


}


export function App() {
    return <div>
        <h1>ChartJS</h1>
        <h2>spend per category level 1</h2>
        <div style={{padding: '20px',       width: '50%'}}>
        <Bar options={options} data={data2} />
        </div>
        </div>;
}
