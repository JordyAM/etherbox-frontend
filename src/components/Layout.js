import React from 'react';
import { Container } from '@mui/material';
import AppBar from './AppBar';


function Layout({ children }) {
    return (
        <Container sx={{
            marginY: 3,
            marginX: 3,
            display:'flex',
            background: '#f9f9f9',
            width: '100vh',
            height: '100vh',
            padding: 3,
            }}>
        <AppBar />
        {children}
        </Container>
        
    );
}

export default Layout;