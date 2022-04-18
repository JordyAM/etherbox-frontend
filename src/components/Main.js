import React from 'react';
import { TextField } from '@mui/material';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import 'animate.css';
import RenderChat from './RenderChat';

function Main(props) {

  const socket = io('http://localhost:8000');
  socket.connect();
// https://rocky-peak-12032.herokuapp.com' ||

  const [comment, setComment] = useState({name: '', message:''})
  const [chatLog, setChatLog] = useState([])
  // const [chat, setChat] = useState([])

  useEffect(() => {
    const length = chatLog.length;
    if(length === 5){
      removeMessage(chatLog)
    }
    socket.on('message', ({name,message}) => {
      setChatLog([...chatLog, {name, message}]) 
    })
    return () => {
      socket.disconnect();
    }
    
  })
  const onTextChange = e => {
    setComment({...comment, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const socket = io('http://localhost:8000')
    socket.connect();
    const {name, message} = comment
    socket.emit('message', {name,message})
    setComment({name, message: ''});
  }

  const removeMessage = (e) => {
    const toDelete = chatLog[0]
    const newChatLog = e.filter(element => element!==toDelete);
    setChatLog(newChatLog);
  }

    return (
      <div className="main-chat" >
        <div className="render-chat"
      > 
        
    </div>
        <form onSubmit={handleSubmit}>
        <div className="name-field">
          <TextField sx={{pt: 1,pb: 1, mt: 5,}}
          name="name" 
          onChange = {e => onTextChange(e)} 
          value={comment.name}
          label="name"
          required
          />
        </div>
        <div >
          <TextField sx={{pt: 1, pb: 1,}}
          name="message" 
          onChange = {e => onTextChange(e)} 
          value={comment.message}
          id="outlined-multiline-static"
          label="message"
          required/>
        </div>
        <Button  type='submit' variant = 'contained' endIcon={<SendIcon/>}>Send</Button>
      </form>
      <Typography variant='h4' 
      sx={{
        padding: 1,
        mt: 5,}}>Chat Log</Typography>
      <RenderChat setChatLog={setChatLog} chatLog={chatLog} />
      </div>
    );
}

export default Main;