import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  CardActions,
  Container,
  ButtonGroup,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUsersAction, getUsersBySkillAction } from "../../store/actions/usersAction";
import { useDispatch } from "react-redux";
import SkillByUser from "../SkillByUser/SkillByUser";
import Search from "../Home/Search"
import Footer from "../Footer/Footer";
import { getSkillsAction } from "../../store/actions/skillsActions";
import { getTasksAction } from "../../store/actions/tasksActions";



const Dashboard = () => {
    // to go back
    const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkillsAction());
    dispatch(getUsersAction());
    dispatch(getTasksAction());
  }, []);


  return (
    <>
      <Container maxWidth="lg" className={classes.root}>

        {/* title */}
      <Box className={classes.box} mt={3}>
        <Typography variant='h2' color='primary'>
        What can we do for you ?
        </Typography>
      </Box>


      {/* SEARCH */}
      <Search />
        <SkillByUser />


      {/* Last 2 Buttons!  */}

      <Box className={classes.root} textAlign='center' mt={4}>
        <ButtonGroup  variant='contained'>
          <Button
          component={Link}
            to='/'
            size='large'
            color='secondary'
            variant='contained'
            //onClick={() => history.goBack()}
            className={classes.button}>
            Go back
          </Button>


          {/* <Button
            component={Link}
            to='/home'
            size='large'
            color='secondary'
            variant='contained'
            className={classes.button}>
            Request a Boon
          </Button> */}
          {/* {linkConditional()} */}

        </ButtonGroup>
      </Box>

              </Container>

            {/* FOOTER component */}
        <Footer  />
    </>
  );
};

export default Dashboard
