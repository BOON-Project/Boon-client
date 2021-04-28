import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../img/avatar.jpg";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Paper,
  Divider,
  Container,
  CssBaseline,
  Grid,
} from "@material-ui/core";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles((theme) => ({
  hero: {
    margin: 30,
  },
  skills: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    margin: 30,
  },
  image: {
    width: 500,
    height: 300,
  },
  skill: {
    borderColor: "black",
    border: 1,
    m: 1,
    border: 1,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Typography variant="h3" color="primary" className={classes.hero}>
        Eniko
      </Typography>
      <Divider variant="middle" />

      <Grid container spacing={2} className={classes.container}>
        <Box component="div">
          <Grid item xs={6}>
            <img src={avatar} alt="lady" className={classes.image} />
          </Grid>
        </Box>
        <List className={classes.skills}>
          <ListItem alignItems="flex-start">
            <Typography variant="h4">Current rating: </Typography>
            <ListItemSecondaryAction>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Typography variant="h5">Skills offered: </Typography>
            <ListItemSecondaryAction>
              <AddIcon />
              <MoreHorizIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Typography variant="h6">Add up to 5 skills</Typography>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <LinkedCameraIcon />
            </ListItemAvatar>
            <Box borderRadius={16} className={classes.skill}>
              <ListItemText primary={`Photography`} />
            </Box>
            <ListItemSecondaryAction>
              <ListItemText primary={`50 boons`} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Grid>

      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Bio</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              tenetur ullam dignissimos animi veritatis exercitationem ex
              maiores voluptas sit dolore? Repellendus, ipsam harum, perferendis
              eos repellat voluptate voluptas quod mollitia soluta, voluptatum
              expedita temporibus recusandae. Unde architecto blanditiis et sed
              dolorum iure porro earum quis. Modi nisi repellendus labore quo?
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Name</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Eniko V</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Location</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              {" "}
              <PersonPinIcon /> | Berlin | 10629
            </Paper>
          </Grid>
        </Grid>
      </div>
    </CssBaseline>
  );
};

export default UserProfile;
