import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.production.min';
import { Socket } from 'socket.io-client';
import TextField from '@mui/material'
import io from 'socket.io-client';

const socket = io.connect('https://rocky-peak-12032.herokuapp.com')

function App() {
  const [ comment, setComment] = useState({message: '', name:''})
  const [chat, setChat] = useState([])

  useEffect(() => {
    Socket.on('message', ({name,message}) => {
      setChat([...chat, {name, message}])
    })
  })
  const onTextChange = e => {
    setComment({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, message} = comment
    Socket.emit('message', {name,message})
    setComment({message: '', name})
  }
  const renderChat = () => {
    return chat.map(({name, message}, index) => {
      <div key={index}>
        <h3>{name}: <span>{message}</span></h3>
      </div>
    })
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Messenger</h1>
        <div className="name-field">
          <TextField 
          name="name" 
          onchange = {e => onTextChange(e)} 
          value={state.name}
          label="name"/>
        </div>
        <div >
          <TextField 
          name="message" 
          onchange = {e => onTextChange(e)} 
          value={state.message}
          id="outlined-multiline-static"
          label="message"/>
        </div>
        <button>Send</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default App;
