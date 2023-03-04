import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

const Navbar = () => {

    return (
        <nav className="Navbar">
            <AppBar 
                position="static" 
                className="navWrapper"
                sx={{
                    backgroundColor: 'hsl(183, 100%, 15%)',
                    marginBottom: "10px"
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            NAME GEN
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );

}


export default Navbar;

