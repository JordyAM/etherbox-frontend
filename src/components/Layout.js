import React from 'react';
import { Toolbar, Typography, Drawer, Container } from '@mui/material';
import { styled } from '@mui/system';
// import { Theme, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { ClassNames } from '@emotion/react';
import { useState } from 'react';
import AppBar from './AppBar';


function Layout({ children }) {
    return (
        <Container sx={{
            marginY: 3,
            display:'flex',
            background: '#f9f9f9',
            width: '100%',
            height: '100vh',
            padding: 3,
            }}>
        <AppBar />
        {children}
        </Container>
        
    );
}

export default Layout;