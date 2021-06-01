import React, { useState } from 'react';
import useStyles from "./styles";
//styling=>
import {
    Avatar,
    Typography,
    Box,
    ListItem,
    ListItemText,
    List,
    Chip,
    Button,
    TextField
} from "@material-ui/core";
import { useSelector } from 'react-redux';


export default function Chat(props) {
  const tasks = useSelector((state) => state.tasksReducer.task);
  const [message, changeTextValue] = useState('')

  console.log('tasks from chattsss', tasks)
  const classes = useStyles();


  return(
    <div>
      <Box className={classes.root}>
        {/* <Typography variant='h6' component='h3'>This is your chatbox</Typography> */}
        {/* <Typography component='p'>Subject: </Typography> */}
    {/* 2 components at bottom */}
    <div className={classes.flex}>
      {/* <div className={classes.topicsWindow}>
        <List>
          {['topic'].map(topic=>(
            <ListItem key={topic}>
              <ListItemText primary={topic}></ListItemText>
            </ListItem>
          ))}
        </List>
      </div> */}
      <div className={classes.chatWindow}>

          {[{from: `${tasks.boonee.userName}`, msg: `${tasks.message}`}].map((chat,i)=>(
              <div className={classes.flex} key={i}>
                  <Chip
                  label={chat.from} className={classes.chip}/>
                  <Typography variant='p'>{chat.msg}</Typography>

                </div>
          ))}

      </div>

      </div>


{/* second flex bot at bottom - BUTTONSSSSS  */}
    <div className={classes.flex}>
            <TextField
            fullWidth
            label='Send a chat'
            className={classes.textField}
            //value={tasks.message}
            //onChange={e=>changeTextValue(e.target.value)}
            />

      <Button variant='contained' color='primary'>
            Send
      </Button>



    </div>





    {/* esto hace que el boton este en el mismo div a la derecha! */}






    {/* im using a box instead of paper */}
      </Box>
    </div>
  )
}