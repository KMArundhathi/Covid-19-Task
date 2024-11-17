import React from 'react'
import {
    Stack,
    Typography,

} from '@mui/material'
import Plot from 'react-plotly.js';




const Linechart = ({stateData}) => {
    const {  TotalCases, ActiveCases, Discharged, Deaths } = {
        State: stateData.State,
        TotalCases: parseInt(stateData["Total Cases"].replace(/,/g, "")),
        ActiveCases: parseInt(stateData["Active Cases"]),
        Discharged: parseInt(stateData.Discharged.replace(/,/g, "")),
        Deaths: parseInt(stateData.Deaths),
    };

    

    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            backgroundColor="#fafafa"
            sx={{
                py: 6,
                // mx: 6,
            }}
        >
            <Typography variant='h5' color='#42a5f5'>Line chart</Typography>
            <Plot
            data={[
                {
                    x: ["Total Cases", "Active Cases", "Discharged", "Deaths"],
                    y: [TotalCases, ActiveCases, Discharged, Deaths],
                    type: "scatter",
                    mode: "lines+markers",
                    marker: { color: "blue" },
                },
            ]}
            layout={ {width: 1000, height: 500} } 
        />

        </Stack>
    )
}

export default Linechart;