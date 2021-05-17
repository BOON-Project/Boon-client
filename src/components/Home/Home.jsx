import React, { useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  AppBar,
  Toolbar,
} from "@material-ui/core"
import Carousel from 'react-material-ui-carousel';
import CurentlyOffering from "./CurrentlyOffering";
import useStyles from "./styles";
import TopRatedUsers from "./TopRatedUsers";
import Search from "./Search";
import SkillByUser from "../SkillByUser/SkillByUser";
import TopRatedBoons from "./TopRatedBoons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSkillsAction } from "../../store/actions/skillsActions";
import { getUsersAction } from "../../store/actions/usersAction";
import { getTasksAction } from "../../store/actions/tasksActions";






const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkillsAction());
    dispatch(getUsersAction());
    dispatch(getTasksAction());
  }, []);



  return (
    <>
    {/* Top main image */}
    <AppBar className={classes.appBar} position="static">
      {/* <Toolbar>
        <Typography variant="h6" color="white">
            Do you want to be part of the change?
        </Typography>
      </Toolbar> */}
    </AppBar>
    <Box className={classes.hero}>
      <Box>
          Join the new social media!
      </Box>
    </Box>
    <Container maxWidth="lg" className={classes.root}>


      {/* DICTIONARY CARD */}
      <Card className={classes.card} elevation={8}>
        <CardContent>
          <Box pb={2}>
            <Typography variant="h2" color="primary">
              Boon
            </Typography>
            <Typography variant="subtitle1">/buːn/</Typography>
          </Box>
          <Typography variant="h5" color="info">
            1. A thing that is helpful or beneficial
          </Typography>
          <Typography variant="h5" color="info">
            2. A favour or request.
          </Typography>
        </CardContent>
      </Card>
      <Box mt={3} mb={3}>
        <Typography variant="h4" color="info">
          {" "}
          We make exchange based economy a reality with our money free exchange
          platform
        </Typography>
      </Box>

      {/* SEARCH */}
      {/* <Search> this is explore component!!
        <SkillByUser />
      </Search> */}



    {/* Adding carousel to them  */}
      <Box height="45rem" display="flex">
    <Carousel autoPlay={false} display='flex'>

      {/* CURRENTLY OFFERING */}
      <CurentlyOffering/>

      {/* TOP RATED BOONERS */}
      <TopRatedUsers />

    </Carousel>
      </Box>




      {/* TOP RATED BOONS */}
      <TopRatedBoons />

    
    </Container>



    </>
  );
};

export default Home;