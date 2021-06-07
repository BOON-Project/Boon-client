import {
  Paper,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Container,
  Chip,
  Tooltip,
  Fab,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect, useState } from "react";
import {  useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getMessages, getTasks } from "../../helpers/apiCalls";
import { setErrorAction } from "../../store/actions/errorActions";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import {
  getTaskAction,
  editTaskStatusAction,
  addBoonsAction,
} from "../../store/actions/tasksActions";
import useStyles from "./styles";

import Chat from "../Chat/Chat";
import ReportIcon from "@material-ui/icons/Report";
const allImages = require.context("../../images", true, /.jpg$/);

const TaskDetails = (props) => {
  const { handleSubmit, control } = useForm();
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();

  const params = useParams();

  const task = useSelector((state) => state.tasksReducer.task);
  const user = useSelector((state) => state.userReducer.user);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getTaskAction(params.id));

    //chat messages - getting messages
    getMessages(params.id).then((msgs) => setMessages(msgs));

  }, [dispatch, params.id, ]);




  const onSubmit = async (data) => {
    let result = await getTasks();
    if (result.error) {
      dispatch(setErrorAction(result.error));
      return;
    }
  };

  const handleChangeStatus = (status, boons, senderId) => {
    dispatch(editTaskStatusAction(task._id, status));
    dispatch(addBoonsAction(boons, status, senderId, task._id))
  };
  // const handleChangeRating = (rating) => {
  //     dispatch(editTaskStatusAction(task.id, rating));
  // };

  return (
    <>
      {task?._id && (
        <Container maxWidth="md" className={classes.root}>
          <Paper className={classes.paper}>
            {/* button at top  */}
            <Box className={classes.buttonBox1} justifyContent="flex-end">
              <Button
                to="/home"
                size="large"
                //you can change this color as you like im only testing
                color="secondary"
                variant="contained"
                onClick={() => history.goBack()}
                className={classes.button}
              >
                <ArrowBackIcon color="primary" />
              </Button>
            </Box>
            {/* end of button at top  */}

            {/* start of main container  */}
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Grid item xs={4}>
                  {/* avatar and small avatar (badge)*/}
                  {user._id !== task.boonee._id ? (
                    <Avatar
                      className={classes.avatar}
                      alt="boonee avatar"
                      src={task.boonee.avatar}
                    ></Avatar>
                  ) : (
                    <Avatar
                      className={classes.avatar}
                      alt="booner avatar"
                      src={task.booner.avatar}
                    ></Avatar>
                  )}
                  <Chip
                    label={task.skill.name}
                    variant="outlined"
                    color="primary"
                    className={classes.tag}
                  >
                    {task.skill.name}
                  </Chip>
                </Grid>
                {/* NAMES RATING AND SKILL CONTAINER */}
                <Typography>
                  {user._id !== task.boonee._id ? (
                    <b>Boonee: {task.boonee.userName}</b>
                  ) : (
                    <b>Booner: {task.booner.userName}</b>
                  )}
                </Typography>
                {/* date  */}
                <Typography>Date: {task.date}</Typography>
                <Typography>Task code: {task._id}</Typography>
                <Typography>Boons: {task.boons}</Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography
                  variant="h6"
                  component="h2"
                  color="secondary"
                  align="center"
                >
                  {task.skill.name}
                </Typography>{" "}
                <div className={classes.imgWrapper}>
                  <img
                    alt="img"
                    src={allImages(`./${task.skill.avatar}`).default}
                    className={classes.taskimg}
                  ></img>
                </div>
              </Grid>
              <Grid item xs={12}>

              </Grid>


              <Grid
                style={{
                  border: "3px solid #329282",
                  height: "21rem",
                  borderRadius: "1rem",
                }}
                item
                xs={12}
              >
                <Container className={classes.messageFormBox}>
                  <Chat messages={messages} />


                </Container>
              </Grid>

              {/* SKILL */}

              <Grid item xs={12} align="center">
                <Typography>Status:</Typography>

                <Typography variant="body1">
                  {task.status === "accepted" ? (
                    <Chip
                      variant="outlined"
                      color="primary"
                      label="accepted"
                      icon={<CheckIcon />}
                    />
                  ) : task.status === "rejected" ? (
                    <Chip
                      variant="outlined"
                      color="primary"
                      label="rejected"
                      icon={<CloseIcon />}
                    />
                  ) : task.status === "finished" ? (
                    <Chip
                      variant="outlined"
                      color="primary"
                      label="finished"
                      icon={<EmojiEmotionsIcon />}
                    />
                  ) : null}
                </Typography>
              </Grid>
              <Grid container align="center" m={2}>
                <Grid item xs={4}>
                  {/* status confirm */}
                  <Tooltip title="Accept" aria-label="add">
                    <Fab
                      color="secondary"
                      className={classes.fab}
                      onClick={() => handleChangeStatus("accepted")}
                    >
                      <DoneIcon />
                    </Fab>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Decline" aria-label="add">
                    <Fab
                      color="secondary"
                      className={classes.fab}
                      onClick={() =>
                        dispatch(() => handleChangeStatus("rejected"))
                      }
                    >
                      <CancelPresentationIcon color="primary" />
                    </Fab>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Finish" aria-label="add">
                    <Fab
                      color="secondary"
                      className={classes.fab}
                      onClick={() => handleChangeStatus("finished")}
                    >
                      <ReportIcon color="primary" />
                    </Fab>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          {/* Last last button at bottom */}
        </Container>
      )}
    </>
  );
};

export default TaskDetails;
