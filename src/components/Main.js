import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';



function Main(props) {

  const socket = io.connect('http://localhost:8000')
// https://rocky-peak-12032.herokuapp.com' ||

  const [comment, setComment] = useState({message: '', name:''})
  const [chatLog, setChatLog] = useState([])
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', ({name,message}) => {
      setChatLog([...chatLog, {name, message}])
    })
  })
  const onTextChange = e => {
    setComment({...comment, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, message} = comment
    socket.emit('message', {name,message})
    setComment({message: '', name})
  }
  const renderChatLog = () => {
    return chatLog.map(({name, message}, index) => {
      return (<div key={index}>
        <h3 className="chatMessage">{name}: <span>{message}</span></h3>
      </div>)
    })
  }

    return (
      <div className="main-chat" 
      sx={{display:'flex',
      }}>
        <div className="render-chat">
          <h1>Chat Log</h1>
          {renderChatLog()}
        </div>
        <form onSubmit={handleSubmit}>
        <div className="name-field">
          <TextField 
          name="name" 
          onChange = {e => onTextChange(e)} 
          value={comment.name}
          label="name"
          required
          />
        </div>
        <div >
          <TextField 
          name="message" 
          onChange = {e => onTextChange(e)} 
          value={comment.message}
          id="outlined-multiline-static"
          label="message"
          required/>
        </div>
        <Button type='submit' variant = 'contained' endIcon={<SendIcon/>}>Send</Button>
      </form>
      </div>
    );
}

export default Main;