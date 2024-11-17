import React from 'react'
import {
    Stack,
    Typography,
} from '@mui/material'
import Plot from 'react-plotly.js';



const Piechart = ({stateData}) => {

    if (!stateData) return null; // Return nothing if stateData is not available

    const { TotalCases, ActiveCases, Discharged, Deaths } = {
        TotalCases: parseInt(stateData["Total Cases"]) || 0,
        ActiveCases: parseInt(stateData["Active Cases"]) || 0,
        Discharged: parseInt(stateData?.Discharged) || 0,
        Deaths: parseInt(stateData?.Deaths) || 0,
    };

    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 6,
                mx: 6,
            }}
        >
            <Typography variant='h3' color='#1976d2'>{`${stateData?.State} - COVID-19 Statistics`}</Typography>
            <Typography variant='h5' color='#42a5f5'>Pie chart</Typography>
            <Plot
            data={[
                {
                    values: [TotalCases,ActiveCases, Discharged, Deaths],
                    labels: ["Total Cases","Active Cases", "Discharged", "Deaths"],
                    type: "pie",
                    textinfo: "label+value",
                    hoverinfo: "label+percent",
                },
                ]}
                layout={ {width: 800, height: 800} } 
        />

        </Stack>
    )
}

export default Piechart;