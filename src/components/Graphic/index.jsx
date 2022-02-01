import React from 'react';

import { 
    Chart as ChartJS,
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend,
} from 'chart.js'

import {Line} from 'react-chartjs-2';

const Chart = ({labels, dataServer}) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );


    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                position: 'left'
            }
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
 };


    const data = {
        labels,
        datasets: [
            {
                label: 'Geração',
                data: dataServer,
                borderColor: '#fbae3e',
                backgroundColor: '#fbae3e'
            },
        ],
    };

    return <Line options={options} data={data} />
}

export default Chart;