import React, {useEffect, useState} from "react";

//MUI styling =>
import avatar from "./img/avatar.jpg";
import {
  Box,Typography,Avatar,List,ListItem,ListItemText,ListItemAvatar,ListItemSecondaryAction,Paper,Divider,Container,CssBaseline,Grid,Button,} from "@material-ui/core";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Rating from '@material-ui/lab/Rating';

//general imports
import useStyles from "./styles";
import { useDispatch, useSelector, Redirect } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { getUsersAction } from "../../store/actions/usersAction";
import {getSkillsAction } from "../../store/actions/skillsActions"
import {getTasksAction} from "../../store/actions/tasksActions"


// start of our User Profile
export default function UserProfile(props){

  //in order to use Material UI u need this =>
  const classes = useStyles();
  const dispatch = useDispatch();


  // to go back
  const history = useHistory();

  //deconstruct user info
  const {
    firstName, userName,bio,rating,avatar
  } = props.location.state.user;


  //Rendering part! =>
  return (
    <CssBaseline>

      <Typography variant="h3" color="secondary" className={classes.hero}>
        {firstName}
        {/* {formData.firstName} */}
      </Typography>
      <Divider variant="middle" />

      <Grid container spacing={2} className={classes.container}>
        <Box component="div">
          <Grid item xs={6}>
            <img src={avatar} alt="avatar" className={classes.image} />
          </Grid>
        </Box>
        <List className={classes.skills}>
          <ListItem alignItems="flex-start">
            <Typography variant="h4" color="secondary">
              Current rating:{" "}
            </Typography>
            <ListItemSecondaryAction>
            <Rating name="size-large" defaultValue={rating} size="large" precision={0.5} readOnly/>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Typography variant="h5" color="primary">
              Skills offered:{" "}
            </Typography>
            <ListItemSecondaryAction>
              <AddIcon color="primary" />
              <MoreHorizIcon color="primary" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Typography variant="h6" color="primary">
              Add up to 5 skills
            </Typography>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Button size="large" color="primary" variant="outlined">
              Photography <LinkedCameraIcon className={classes.icon} />
            </Button>

            <ListItemSecondaryAction>
              <ListItemText primary={`50 boons per hour`} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Grid>

      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p" color="primary">
              Bio
            </Typography>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              {bio}
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p" color="primary">
              Name
            </Typography>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>{userName}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p" color="primary">
              Location
            </Typography>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <PersonPinIcon className={classes.icon} /> Berlin | 10629
            </Paper>
          </Grid>
        </Grid>
      </div>
    </CssBaseline>
  );
};

