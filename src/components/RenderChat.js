import React, { memo } from 'react';
import { Typography } from '@mui/material';
import 'animate.css'
import { Box } from '@mui/material';


function RenderChat(props) {
  let top
    return props.chatLog.map(({name, message}, index) => {
      return (<Box key={index} 
      className='animate__animated animate__zoomIn'
      // sx={{width: '100%'}}
      >
        <Typography 
        style={{ wordWrap: "break-word"}}
        className="chatMessage"
        variant='h6'
        // maxWidth='sm'
        sx={{
          backgroundColor:'#2979ff',
          pt: 1, pb: 1, pl: 2, pr: 2,
          my: 4, mb: 4,
          borderRadius: 10,
          wordBreak: "break-word",
          color:'white',
          position: 'relative',
          // left: ,
          // top:
        }}
        >{name}: {message}</Typography>
      </Box>)
    })
}

export default memo(RenderChat);