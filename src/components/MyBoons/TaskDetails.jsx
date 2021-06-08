import {
  Badge,
  Paper,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Avatar,
  Container,
  Chip,
  Tooltip,
  Fab,
} from "@material-ui/core";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/Done";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import Rating from "@material-ui/lab/Rating";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  //FUNCTION FOR POPUP WINDOW Material UI
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openCancel, setOpenCancel] = React.useState(false);
  const [openFinished, setOpenFinished] = React.useState(false);
  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };
  const handleClickOpenCancel = () => {
    setOpenCancel(true);
  };
  const handleClickOpenFinished = () => {
    setOpenFinished(true);
  };
  const handleClose = () => {
    setOpenAccept(false);
    setOpenCancel(false);
    setOpenFinished(false);
  };
  //the popups are at the end of the return statement
  //END OF POPUP WINDOW FOR MATERIAL UI

  const task = useSelector((state) => state.tasksReducer.task);
  const user = useSelector((state) => state.userReducer.user);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getTaskAction(params.id));

    //chat messages - getting messages
    getMessages(params.id).then((msgs) => setMessages(msgs));
  }, [dispatch, params.id]);

  const onSubmit = async (data) => {
    let result = await getTasks();
    if (result.error) {
      dispatch(setErrorAction(result.error));
      return;
    }
  };

  const handleChangeStatus = (status, boons, senderId) => {
    dispatch(editTaskStatusAction(task._id, status));
    dispatch(addBoonsAction(boons, status, senderId, task._id));
    // setOpen(false);
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
              {/* avatar and small avatar (badge)*/}
              <Grid item xs={12} md={6} className={classes.mainImgWrap}>
                {user._id !== task.boonee._id ? (
                  <Badge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    badgeContent={
                      <Avatar
                        className={classes.avatar}
                        alt="boonee avatar"
                        src={task.boonee.avatar}
                      />
                    }
                  >
                    <div className={classes.imgWrapper}>
                      <img
                        alt="img"
                        src={allImages(`./${task.skill.avatar}`).default}
                        className={classes.taskimg}
                      ></img>
                    </div>
                  </Badge>
                ) : (
                  <Badge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    badgeContent={
                      <Avatar
                        className={classes.avatar}
                        alt="booner avatar"
                        src={task.booner.avatar}
                      />
                    }
                  >
                    <div className={classes.imgWrapper}>
                      <img
                        alt="img"
                        src={allImages(`./${task.skill.avatar}`).default}
                        className={classes.taskimg}
                      ></img>
                    </div>
                  </Badge>
                )}{" "}
              </Grid>
              {/*END of avatar and small avatar (badge)*/}

              {/* NAMES RATING AND SKILL CONTAINER GRID*/}
              <Grid item xs={12} md={6} className={classes.textWrap}>
                <div>
                  {/* START OF SKILL AND TASK CHIP */}

                  {/* TASK CHIP */}
                  <Chip
                    label={task.skill.name}
                    variant="outlined"
                    color="primary"
                    className={classes.tag}
                  >
                    {task.skill.name}
                  </Chip>
                  {/* SKILL */}
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
                    ) : task.status === "pending" ? (
                      <Chip
                        variant="outlined"
                        color="primary"
                        label="pending"
                        icon={<HourglassEmptyIcon />}
                      />
                    ) : null}
                  </Typography>

                  {/* END OF SKILL */}

                  {/* START OF GENERAL USER DATA */}
                  {/* THE OPPOSITE USERS DATA */}
                  <Typography>
                    {user._id !== task.boonee._id ? (
                      <b>Boonee: {task.boonee.userName}</b>
                    ) : (
                      <b>Booner: {task.booner.userName}</b>
                    )}
                  </Typography>
                  {/* date, task code and boons  */}
                  <Typography>Date: {task.date.slice(0, 10)} </Typography>
                  <Typography>Ref: {task._id}</Typography>
                  <Typography>Boons: {task.boons}</Typography>

                  {/* BOONER STATUSES */}
                  {/* 1. BOONER - PENDING */}
                  {task.status === "pending" && user._id !== task.boonee._id && (
                    <div>
                      <p>
                        {task.boonee.userName} would like to know if you are
                        available for this task
                      </p>
                      {/* ACCEPT BTN */}
                      <Tooltip title="Accept" aria-label="add">
                        <Fab
                          onClick={handleClickOpenAccept}
                          color="secondary"
                          className={classes.fab}
                        >
                          <DoneIcon />
                        </Fab>
                      </Tooltip>

                      <Tooltip title="Decline" aria-label="add">
                        <Fab
                          color="secondary"
                          className={classes.fab}
                          onClick={handleClickOpenCancel}
                        >
                          <CancelPresentationIcon color="primary" />
                        </Fab>
                      </Tooltip>
                    </div>
                  )}
                  {/* END OF 1. BOONER PENDING */}
                  {/* 2. BOONER ACCEPTED */}

                  {task.status === "accepted" && user._id !== task.boonee._id && (
                    <div>
                      <p>
                        You accepted this task and it will be on the{" "}
                        {task.date.slice(0, 10)}, you can still cancel it 6
                        hours before the task{" "}
                      </p>
                      <Grid item xs={4}>
                        <Tooltip title="Decline" aria-label="add">
                          <Fab
                            color="secondary"
                            className={classes.fab}
                            onClick={handleClickOpenCancel}
                          >
                            <CancelPresentationIcon color="primary" />
                          </Fab>
                        </Tooltip>
                      </Grid>
                    </div>

                    //  IMPLIMENT LATER: 6 hours before the task:
                    // YOU CANNOT CANCEL THIS ANYMORE, task details after the date
                    // FINISHED? confirm
                  )}
                  {/* EDN OF 2. BOONER ACCEPTED */}
                  {/* 3. BOONER REJECTED */}

                  {task.status === "rejected" &&
                    user._id !== task.boonee._id && (
                      <p>This task was cancelled</p>
                    )}
                  {/* END OF 3. BOONER REJECTED */}
                  {/* 4. BOONER FINISHED */}

                  {task.status === "finished" && user._id !== task.boonee._id && (
                    <p>
                      You have successfully finished this task on{" "}
                      {task.date.slice(0, 10)}
                    </p>

                    //  IMPLIMENT LATER Here is your rating  AND lets wait for the rating
                  )}
                  {/* IF THERE IS A RATING */}
                  {task.rating > 0 &&
                    task.status === "finished" &&
                    user._id === task.booner._id && (
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend">
                          Here is your rating for this task:
                        </Typography>
                        <Rating name="read-only" value={task.rating} readOnly />
                      </Box>
                    )}
                  {/* END OF 4. BOONER FINISHED */}

                  {/* BOONEE STATUSES */}

                  {task.status === "pending" && user._id === task.boonee._id && (
                    <div>
                      <p>
                        You have successfully requested this task. Let's wait
                        for
                        {task.booner.userName}'s answer! You can still cancel
                        this task.
                      </p>
                      <Grid item xs={4}>
                        <Tooltip title="Decline" aria-label="add">
                          <Fab
                            color="secondary"
                            className={classes.fab}
                            onClick={handleClickOpenCancel}
                          >
                            <CancelPresentationIcon color="primary" />
                          </Fab>
                        </Tooltip>
                      </Grid>
                    </div>
                  )}

                  {task.status === "accepted" && user._id === task.boonee._id && (
                    <div>
                      <p>
                        Good news! {task.booner.userName} accepted this task!
                        Put this date into your calendar:{" "}
                        {task.date.slice(0, 10)}. You can still cancel it 6
                        hours before the task!
                        {/* IMPLIMENT THIS LATER 6 hours before the task: YOU CANNOT CANCEL
                    THIS ANYMORE, task details  AND after the date FINISHED or
                    report a problem */}
                      </p>
                      <Grid item xs={4}>
                        <Tooltip title="Decline" aria-label="add">
                          <Fab
                            color="secondary"
                            className={classes.fab}
                            onClick={handleClickOpenCancel}
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
                            onClick={handleClickOpenFinished}
                          >
                            <ReportIcon color="primary" />
                          </Fab>
                        </Tooltip>
                      </Grid>
                    </div>
                  )}

                  {task.status === "rejected" &&
                    user._id === task.boonee._id && (
                      <p>
                        This task was cancelled. But don't worry, there are
                        plenty of Booners in the sea.
                      </p>
                    )}

                  {task.status === "finished" && user._id === task.boonee._id && (
                    <p>
                      We hope you were happy with this user. Please let us know
                      with a rating.
                      {/* IMPLIMENT LATER Your rating for this task is: ***** */}
                    </p>
                  )}

                  {/* NO RATIN YET */}
                  {task.rating === 0 &&
                    task.status === "finished" &&
                    user._id === task.boonee._id && (
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend">
                          Please rate this task!
                        </Typography>
                        <Rating name="pristine" value={null} />
                      </Box>
                    )}
                  {task.rating > 0 &&
                    task.status === "finished" &&
                    user._id === task.boonee._id && (
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend">
                          Your rating for this task:
                        </Typography>
                        <Rating name="read-only" value={task.rating} readOnly />
                      </Box>
                    )}
                </div>
              </Grid>
              {/* END OF GENERAL USER DATA */}
              {/* START OF CHAT */}

              <Grid
                style={{
                  border: "1px solid grey",
                  height: "21rem",
                  borderRadius: "1rem",
                }}
                item
                xs={12}
                md={6}
              >
                <Container className={classes.messageFormBox}>
                  <Chat messages={messages} />
                </Container>
              </Grid>
              {/* END OF CHAT */}
            </Grid>

            {/* ALL DIALOGS */}
            {/* POPUP FOR ACCEPT */}
            <Dialog
              open={openAccept}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Accept task"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  We are glad you found a task you like! Please confirm if you
                  want to accept it!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary">Changed my mind</Button>
                <Button
                  onClick={() => handleChangeStatus("accepted")}
                  color="primary"
                  autoFocus
                >
                  Accept task
                </Button>
              </DialogActions>
            </Dialog>

            {/* POP UP FOR REJECTED */}

            <Dialog
              open={openCancel}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Cancel this task"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure that you want to cancel this task?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary">Changed my mind</Button>
                <Button
                  onClick={() => handleChangeStatus("rejected")}
                  color="primary"
                  autoFocus
                >
                  Yes, cancel
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
          {/* POPUP FOR CONFIRM */}
          <Dialog
            open={openFinished}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Confirm task"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please confirm that this task took place. If you had any issues,
                contact our customer support! Don't forget to rate{" "}
                {task.booner.userName}!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary">Changed my mind</Button>
              <Button
                onClick={() => handleChangeStatus("finished")}
                color="primary"
                autoFocus
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      )}
    </>
  );
};

export default TaskDetails;
