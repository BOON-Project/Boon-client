import React, { useState } from "react";
import { addMessages } from "../../helpers/apiCalls";
import useStyles from "./styles";

import {
    hideErrorAction,
    setErrorAction,
} from "../../store/actions/errorActions";
//styling=>
import { Typography, Box, Chip, Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import useFullPageLoader from "../hooks/useFullPageLoader";

export default function Chat(props) {
    const classes = useStyles();

    const task = useSelector((state) => state.tasksReducer.task);

    const sender = useSelector((state) => state.userReducer.user);

    const [messages, setMessages] = useState(props.messages);

    console.log("tasks from chattsss");
    const { handleSubmit, control } = useForm();
    const dispatch = useDispatch();
    console.log("data for aghy", task);

    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const onSubmit = async (formData) => {
        showLoader();
        const msg = formData.msg;

        //sends the message to backend
        let result = await addMessages(
            { msg, senderId: sender._id, task: task._id },
            task._id
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

    return (
        <div>
            <p></p>
            <Box className={classes.root}>
                <div className={classes.flex}>
                    <div className={classes.chatWindow}>
                        {[
                            {
                                from: `${task.boonee.userName}`,
                                msg: `${task.message}`,
                                date: `${task.createdAt}`,
                            },
                        ].map((chat, i) => (
                            <div className={classes.flex} key={i}>
                                <span style={{ fontSize: "0.5rem" }}>
                                    {moment
                                        .utc(chat.date)
                                        .startOf("minute")
                                        .fromNow()}
                                </span>
                                <Chip
                                    style={{ margin: "0 0.5rem" }}
                                    label={chat.from}
                                    className={classes.chip}
                                />
                                <Typography
                                    style={{ margin: "0.5rem 1rem" }}
                                    variant='subtitle2'>
                                    {chat.msg}{" "}
                                </Typography>
                            </div>
                        ))}

                        {/* TESTINGGGGG */}
                        {messages.map((msg, i) => (
                            <div
                                className={
                                    task.boonee._id !== msg.senderId._id ||
                                    task.booner._id === msg.senderId._id
                                        ? classes.flexReverse
                                        : classes.flex
                                }
                                key={i}>
                                <span style={{ fontSize: "0.5rem" }}>
                                    {moment
                                        .utc(msg.createdAt)
                                        .startOf("minute")
                                        .fromNow()}
                                </span>
                                <Chip
                                    label={msg.senderId.userName}
                                    className={classes.chip}
                                />
                                <Typography variant='subtitle2'>
                                    {" "}
                                    {msg.msg}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>

                {/* second flex bot at bottom - BUTTONSSSSS  */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.flexInput}>
                        <Controller
                            name='msg'
                            control={control}
                            defaultValue=''
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    outlined
                                    fullWidth
                                    label='Send a chat'
                                    className={classes.textField}
                                    onChange={onChange}
                                    name='msg'
                                    value={value}
                                />
                            )}
                            rules={{ required: "Write a message first" }}
                        />

                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'>
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
