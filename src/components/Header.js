import React, { useState } from "react";
import { Box, Button, MenuItem, Stack, styled, TextField, Typography } from "@mui/material";
import statesData from "../dummydata/csvjson.json";
import Piechart from "./Piechart";
import Linechart from "./Linechart";
import Barchart from "./Barchart";
import Mapview from "./Mapview";

const Header = () => {
    const [selectedState, setSelectedState] = useState("");
    const [stateData, setStateData] = useState(null);
    // console.log(stateData,'stateData');


    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedState) {
            alert("Please select a state!");
            return;
        }
        const data = statesData.find((state) => state?.State === selectedState);
        setStateData(data || null); // Update state with the selected state's data
    };

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: "30vh",
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(2),
        backgroundColor: "#fafafa",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    return (
        <>
            <CustomBox component="header">
                <Stack component="section" direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h6" color="primary">
                        Select State
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: 500, maxWidth: '100%' }}>
                        <TextField
                            id="outlined-select-state"
                            select
                            label="Select"
                            value={selectedState}
                            onChange={handleStateChange}
                            fullWidth
                        >
                            {statesData.map((state, index) => (
                                <MenuItem key={index} value={state.State}>
                                    {state.State}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            size="medium"
                            sx={{
                                fontSize: "0.9rem",
                                textTransform: "capitalize",
                                py: 2,
                                mt: 3,
                                mb: 2,
                                borderRadius: 0,
                                backgroundColor: "#1565c0",
                                "&:hover": {
                                    backgroundColor: "#1976d2",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Stack>
            </CustomBox>
            {
                stateData && (
                    <>
                        <Piechart stateData={stateData} />
                        <Linechart stateData={stateData} />
                        <Mapview stateData={[stateData]} />
                        <Barchart stateData={stateData} />
                    </>
                )
            }
        </>
    );
};

export default Header;
