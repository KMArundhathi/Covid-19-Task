import { Stack, Typography } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";

const Barchart = ({ stateData }) => {

    const totalCases = parseInt(stateData['Total Cases'].replace(/,/g, ''));
    const activeCases = stateData['Active Cases'];
    const discharged = parseInt(stateData['Discharged'].replace(/,/g, ''));
    const deaths = stateData['Deaths'];

    const data = [
        {
            x: ['Total Cases'],
            y: [totalCases],
            type: 'bar',
            name: 'Total Cases',
            marker: { color: 'blue' },
        },
        {
            x: ['Active Cases'],
            y: [activeCases],
            type: 'bar',
            name: 'Active Cases',
            marker: { color: 'red' },
        },
        {
            x: ['Discharged'],
            y: [discharged],
            type: 'bar',
            name: 'Discharged',
            marker: { color: 'green' },
        },
        {
            x: ['Deaths'],
            y: [deaths],
            type: 'bar',
            name: 'Deaths',
            marker: { color: 'black' },
        },
    ];

    // Layout configuration for the chart
    const layout = {

        barmode: 'group',
        xaxis: {
            title: 'Metrics',
        },
        yaxis: {
            title: 'Count',
        },
        showlegend: true,
    };

    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 6,
            }}
        >
            <Typography variant='h5' color='#42a5f5'>Grouped Bar chart</Typography>
            <Plot data={data} layout={layout} />
        </Stack>
    )
}

export default Barchart;
