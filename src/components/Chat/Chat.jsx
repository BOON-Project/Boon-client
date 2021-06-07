import React, { useState } from "react";
import { addMessages } from "../../helpers/apiCalls";
import useStyles from "./styles";
import { addMessage } from "../../store/actions/chatActions";
import {
  hideErrorAction,
  setErrorAction,
} from "../../store/actions/errorActions";
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
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import useFullPageLoader from "../hooks/useFullPageLoader";

export default function Chat(props) {
  const classes = useStyles();
  const tasks = useSelector((state) => state.tasksReducer.task);
  const sender = useSelector((state) => state.userReducer.user);

  const [message, changeTextValue] = useState("");
  const [messages, setMessages] = useState(props.messages);

  console.log("tasks from chattsss");
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  console.log("data for aghy", tasks);

  const onSubmit = async (formData) => {
    showLoader();
    const msg = formData.msg;

    //sends the message to backend
    let result = await addMessages(
      { msg, senderId: sender._id, task: tasks._id },
      tasks._id
    );
    //handle error case
    if (result.error) {
      dispatch(setErrorAction(result.error));
      hideLoader();
      return;
    }

    // handle success case
    dispatch(hideErrorAction());
    console.log("hiVasilis", [...messages, ...result.data]);
    setMessages([...messages, ...result.data]);
    //dispatch(addMessage(result.data));
  };

  const [loader, showLoader, hideLoader] = useFullPageLoader();

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
            {messages.map((msg, i) => (
              <div
                className={
                  tasks.boonee._id !== msg.senderId._id
                    ? classes.flexReverse
                    : classes.flex
                }
                key={i}
              >
                <p>{moment.utc(msg.createdAt).startOf("minute").fromNow()}</p>
                <Chip label={msg.senderId.userName} className={classes.chip} />
                <Typography variant="subtitle1"> {msg.msg}</Typography>
              </div>
            ))}
          </div>
        </div>

        {/* second flex bot at bottom - BUTTONSSSSS  */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.flexInput}>
            <Controller
              name="msg"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  outlined
                  fullWidth
                  label="Send a chat"
                  className={classes.textField}
                  onChange={onChange}
                  name="msg"
                  value={value}
                />
              )}
              rules={{ required: "Write a message first" }}
            />

            <Button type="submit" variant="contained" color="primary">
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
