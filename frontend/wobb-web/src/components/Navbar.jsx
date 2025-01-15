import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect screen size

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1976d2', boxShadow: 2 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px', display: 'flex', alignItems: 'center' }}>
                    <img src="https://majestic-yeot-a370b2.netlify.app/images/phoenix-logo.png" alt="Logo" style={{ marginRight: '8px', height: '60px' }} />
                    Wobb
                </Typography>

                {/* For Mobile View */}
                {isMobile ? (
                    <IconButton color="inherit" onClick={handleMenuClick}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Button
                            color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                textTransform: 'none',
                                letterSpacing: '1px',
                                '&:hover': { backgroundColor: '#1565c0' }
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                textTransform: 'none',
                                letterSpacing: '1px',
                                '&:hover': { backgroundColor: '#1565c0' }
                            }}
                        >
                            Profile
                        </Button>
                        <Button
                            color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                textTransform: 'none',
                                letterSpacing: '1px',
                                '&:hover': { backgroundColor: '#1565c0' }
                            }}
                        >
                            Campaigns
                        </Button>
                    </div>
                )}

                {/* Menu for Mobile View */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{ mt: '45px' }}
                >
                    <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Campaigns</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
