import {
  Paper,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Container,
  Chip,
  TextField,
  Tooltip,
  Fab,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getTasks } from "../../helpers/apiCalls";
import { setErrorAction } from "../../store/actions/errorActions";
import {
  getTaskAction,
  editTaskAction,
} from "../../store/actions/tasksActions";
import useStyles from "./styles";

import Chat from "../Chat/Chat";
import ReportIcon from "@material-ui/icons/Report";
const allImages = require.context("../../images", true, /.jpg$/);

const TaskDetails = (props) => {
  const { handleSubmit, control } = useForm();

  const dispatch = useDispatch();

  const params = useParams();

  const task = useSelector((state) => state.tasksReducer.task);
  const user = useSelector((state) => state.userReducer.user);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getTaskAction(params.id));
  }, []);

  const onSubmit = async (data) => {
    let result = await getTasks();
    if (result.error) {
      dispatch(setErrorAction(result.error));
      return;
    }
  };

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
                    color="inherit"
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
                <img
                  alt="img"
                  src={allImages(`./${task.skill.avatar}`).default}
                  className={classes.taskimg}
                ></img>
              </Grid>
              <Grid item xs={12}>
                {/* <Typography>
                                    Message:<span>{task.message}</span>
                                </Typography> */}
              </Grid>

              {/* <Grid item xs={12}>
                                {" "}
                                <img
                                    alt='img'
                                    src={
                                        allImages(`./${task.skill.avatar}`)
                                            .default
                                    }
                                    className={classes.taskimg}></img>
                            </Grid> */}
              <Grid
                style={{
                  border: "3px solid #329282",
                  height: "20rem",
                  borderRadius: "1rem",
                }}
                item
                xs={12}
              >
                <Container className={classes.messageFormBox}>
                  <chatStore>
                    <Chat />
                  </chatStore>
                  {/* <form
                                        className={classes.form}
                                        noValidate
                                        onSubmit={handleSubmit(onSubmit)}>
                                        <Controller
                                            name='message'
                                            control={control}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error },
                                            }) => (
                                                <TextField
                                                    multiline
                                                    rows={2}
                                                    name='message'
                                                    variant='outlined'
                                                    fullWidth
                                                    id='message'
                                                    placeholder='Hello! I would love to get this boon from you'
                                                    onChange={onChange}
                                                    value={value}
                                                    helperText={
                                                        error
                                                            ? error.message
                                                            : null
                                                    }
                                                    maxLenght='100'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    className={classes.input}
                                                />
                                            )}
                                            rules={{ maxLenght: 100 }}
                                        />
                                        {/* SUBMIT BUTTON */}
                  {/* <Button
                                            type='submit'
                                            fullWidth
                                            variant='contained'
                                            color='primary'
                                            className={classes.submit}>
                                            Send Message
                                        </Button>
                                    </form>{" "} */}
                </Container>
              </Grid>
              {/* SKILL */}
              {/* RATING TEXT */}
              <Typography variant="body1" p={4}>
                {task.status}
              </Typography>
              <Grid container align="center">
                <Grid item xs={4}>
                  {/* status confirm */}
                  <Tooltip title="Accept" aria-label="add">
                    <Fab
                      color="secondary"
                      className={classes.fab}
                      color="primary"
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_TASK_STATUS",
                          payload: "confirmed",
                        })
                      }
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
                        dispatch({
                          type: "UPDATE_TASK_STATUS",
                          payload: "rejected",
                        })
                      }
                    >
                      <CancelPresentationIcon color="primary" />
                    </Fab>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="ReportIcon" aria-label="add">
                    <Fab
                      color="secondary"
                      className={classes.fab}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_TASK_STATUS",
                          payload: "finished",
                        })
                      }
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
