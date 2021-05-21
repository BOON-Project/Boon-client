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
import LoadingBar from 'react-redux-loading-bar'
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getUsersAction,
  getUsersBySkillAction,
} from "../../store/actions/usersAction";
import { useDispatch } from "react-redux";
import SkillByUser from "../SkillByUser/SkillByUser";
import Search from "../Home/Search";
import { getSkillsAction } from "../../store/actions/skillsActions";
import { getTasksAction } from "../../store/actions/tasksActions";
import Footer from "../Footer/Footer";

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
      <Container maxWidth="lg" style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
      }}

      className={classes.root}>
        {/* title */}
        <Box className={classes.box} mt={3}>
          <Typography variant="h2" color="primary">
            What can we do for you ?
          </Typography>
        </Box>

        {/* SEARCH */}
        <Search />


        <SkillByUser />
          </Container>
        <Footer />




    </>
  );
};

export default Dashboard;
