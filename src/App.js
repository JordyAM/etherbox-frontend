import logo from './logo.svg';
import { Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Socket } from 'socket.io-client';
import io from 'socket.io-client';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { Container, Typography, TextField } from '@mui/material';
import { Box } from '@mui/system';
import ResponsiveAppBar from './components/Layout'
import AppBar from '@mui/material/AppBar';
import Layout from './components/Layout';
import Main from './components/Main';


function App() {
  
  return (
    <div className="App">
      
      <Container fluid>
      {/* <AppBar position="static"> */}
        <Main/>
      {/* </AppBar> */}
      </Container>
      
    </div>
  );
}

export default App;
