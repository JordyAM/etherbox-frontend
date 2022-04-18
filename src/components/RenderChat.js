import React, { memo } from 'react';
import { Typography } from '@mui/material';


function RenderChat(props) {
    return props.chatLog.map(({name, message}, index) => {
      return (<div key={index} 
      className='animate__animated animate__zoomIn'
      >
        <Typography 
        className="chatMessage"
        variant='h5'
        sx={{
          backgroundColor:'#2979ff',
          padding: 1.5,
          mt: 4, mb: 4, 
	        border: 1,
          borderRadius: 10,
          wordBreak: "break-word",
          color:'white'
        }}
        >{name}: <span>{message}</span></Typography>
      </div>)
    })
}

export default memo(RenderChat);