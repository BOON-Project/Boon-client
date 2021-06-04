import React, { useState } from "react";
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
  TextField,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Chat(props) {
  const tasks = useSelector((state) => state.tasksReducer.task);
  const [message, changeTextValue] = useState("");

  console.log("tasks from chattsss");
  const classes = useStyles();

  return (
    <div>
      <p></p>
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
            {[
              {
                from: `${tasks.boonee.userName}`,
                msg: `${tasks.message}`,
                date: `${tasks.createdAt}`,
              },
            ].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography variant="subtitle1">{chat.msg} </Typography>
                <p>{moment.utc(chat.date).startOf("minute").fromNow()}</p>
              </div>
            ))}

            {/* TESTINGGGGG */}
            {props.messages.map((msg, i) => (
              <div
                className={
                  tasks.boonee._id !== msg.senderId._id
                    ? classes.flexReverse
                    : classes.flex
                }
                key={i}
              >
                <Chip label={msg.senderId.userName} className={classes.chip} />
                <Typography variant="subtitle1"> {msg.msg}</Typography>
              </div>
            ))}
          </div>
        </div>

        {/* second flex bot at bottom - BUTTONSSSSS  */}

        <form>
          <div className={classes.flexInput}>
            <TextField
              outlined
              fullWidth
              label="Send a chat"
              className={classes.textField}
              onChange={(e) => changeTextValue(e.target.value)}
            />

            <Button variant="contained" color="primary">
              Send
            </Button>
          </div>
        </form>

        {/* esto hace que el boton este en el mismo div a la derecha! */}

        {/* im using a box instead of paper */}
      </Box>
    </div>
  );
}
