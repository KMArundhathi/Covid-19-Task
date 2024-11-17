import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    styled,
    createTheme,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
        },
    },
});


const Navbar = () => {

    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                backgroundColor: theme.palette.primary.light,
            }}
            elevation={0}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    component="h2" >
                    Covid-19 Report
                </Typography>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
