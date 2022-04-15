import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Socket } from 'socket.io-client';
import { TextField } from '@mui/material'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000')
// https://rocky-peak-12032.herokuapp.com' ||
function App() {
  const [ comment, setComment] = useState({message: '', name:''})
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
        <h3>{name}: <span>{message}</span></h3>
      </div>)
    })
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>EtherBox</h1>
        <div className="name-field">
          <TextField 
          name="name" 
          onChange = {e => onTextChange(e)} 
          value={comment.name}
          label="name"/>
        </div>
        <div >
          <TextField 
          name="message" 
          onChange = {e => onTextChange(e)} 
          value={comment.message}
          id="outlined-multiline-static"
          label="message"/>
        </div>
        <button>Send</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChatLog()}
      </div>
    </div>
  );
}

export default App;
