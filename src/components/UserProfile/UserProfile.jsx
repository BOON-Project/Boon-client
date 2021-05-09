import React from "react";

//MUI styling =>
import {
  Box,Typography,List,ListItem,ListItemText,ListItemSecondaryAction,Paper,Divider,CssBaseline,Grid,Button, ButtonGroup, Link,} from "@material-ui/core";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Rating from '@material-ui/lab/Rating';

//general imports
import useStyles from "./styles";
import { useDispatch, useSelector, Redirect } from "react-redux";
import { useHistory } from "react-router";
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

  //deconstruct user's info
  const {
    firstName, userName,bio,rating,avatar,skills
  } = props.location.state.user;


  //Rendering skills!
// const skillItems = useSelector((state) => state.skills);

// const renderSkillsItems = skillItems.map((skill, index)=> (
// <div className={classes.root}>
//   <Grid container spacing={3}>

//     {/* Header */}
//     <Grid item xs={12} sm={6}>
//       <Paper className={classes.paper}>Offering</Paper>
//     </Grid>

//     <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>Skill</Paper>
//     </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>Boons</Paper>
//         </Grid>

//       {/* Skills List */}
//       <div key={index} className={classes.root}>

//       <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>{skill.name}</Paper>
//     </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>{skill.boons}</Paper>
//         </Grid>
//       </div>

//   </Grid>
// </div>
// ))


  //Rendering part! =>
  return (
    <CssBaseline>

      <Typography variant="h3" color="secondary" className={classes.hero}>
        {firstName}
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


              {/* User Rating =>  */}
            <ListItemSecondaryAction>
            <Rating name="size-large" defaultValue={rating} size="large" precision={0.5} readOnly/>
            </ListItemSecondaryAction>
          </ListItem>

          {/* start of skills =>  */}
          <ListItem alignItems="flex-start">
            <Typography variant="h5" color="primary">
              Skills offered:{" "}
            </Typography>

            {/* skills mappp */}
            <ListItemSecondaryAction>
              {skills[0].skillID.name},{skills[1].skillID.name}
            </ListItemSecondaryAction>
          </ListItem>


          <ListItem alignItems="flex-start">
            <Typography variant="h6" color="primary">
              Best rated skills:
            </Typography>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Button size="large" color="primary" variant="outlined">
            {skills[0].skillID.name}
            </Button>
            {/* Boons pro Stunde => */}
            <ListItemSecondaryAction>
              <ListItemText primary={`${skills[0].boons} boons per hour`} />
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



      {/* Last 2 Buttons!  */}

      <Box className={classes.root} textAlign='center'>

            <ButtonGroup disableElevation variant="contained"   >

              <Button
              component={Link} to='/home'
              size='large'
              color='secondary'
              variant='contained'
              onClick={() => history.goBack()}
              className={classes.button}>
              Go back
              </Button>

              <Button
              component={Link} to='/home'
              size='large'
              color='secondary'
              variant='contained'

              //pending!!
              onClick={() => history.goBack()}
              className={classes.button}>
              Send a message
              </Button>
          </ButtonGroup>





      </Box>
    </CssBaseline>
  );
};

