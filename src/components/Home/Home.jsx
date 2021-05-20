import React, { useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Typed from "react-typed";
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
import Footer from "../Footer/Footer";
import TopCarousel from "./TopCarousel";
import Booners from "../../images/Booners.svg";

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

      <Box className={classes.root}>
        <TopCarousel />
      </Box>

      {/* ****************************************************************** */}
      <Container maxWidth='lg' className={classes.root}>
        {/* DICTIONARY CARD */}
        <Card className={classes.booncard} elevation={8}>
          <CardContent>
            <Box pb={2}>
              <Typography
                variant='h2'
                color='secondary'
                style={{ fontWeight: 600 }}>
                Boon
              </Typography>
              <Typography variant='subtitle2' style={{ fontWeight: 600 }}>
                /buːn/
              </Typography>
            </Box>

            {/* small typing animation 1 */}
            <Typography variant='h4' color='info'>
              <Typed
                strings={["1. A thing that is helpful or beneficial"]}
                typeSpeed={40}
                onReset='true'
                showCursor={false}
              />
            </Typography>

            {/* small typing animation 2 */}
            <Typography variant='h4' color='info'>
              <Typed
                strings={["2. A favour or request."]}
                typeSpeed={40}
                startDelay={3300}
                showCursor={false}
              />
            </Typography>
          </CardContent>
        </Card>
        <Box mt={3} mb={3}>
          <Typography variant='h4' color='info'>
            {" "}
            We make exchange based economy a reality with our money free
            exchange platform
          </Typography>
        </Box>
        {/* ***************************************************************** */}

        {/* SEARCH */}
        {/* <Search> this is explore component!!
        <SkillByUser />
      </Search> */}

        {/* Adding carousel to them  */}
        <Box height='41rem' display='flex'>
          <Carousel
            centerSlidePercentage={55}
            className={classes.carousel}
            autoPlay={false}
            display='flex'
            animation='slide'
            navButtonsAlwaysVisible={true}
            //styling tiny dots at bottom
            indicatorIconButtonProps={{
              style: {
                padding: "5px", // 1
                color: "#32908F", // 3
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                backgroundColor: "#E4B363", // 2
              },
            }}
            indicatorContainerProps={{
              style: {
                marginTop: "30px", // 5
              },
            }}
            indicatorIcon={{
              style: {
                color: "#E4B363",
              },
            }}
            //styling arrow icons!
            fullHeightHover={false}
            navButtonsProps={{
              style: {
                backgroundColor: "#E4B363",
                color: "#32908F",
              },
            }}
            navButtonsWrapperProps={{
              style: {
                bottom: "0",
              },
            }}>
            {/* CURRENTLY OFFERING */}
            <CurentlyOffering />
            <CurentlyOffering />
            <CurentlyOffering />
          </Carousel>
        </Box>

        {/* TOP RATED BOONERS // second carousel */}

        <Box height='48rem' display='flex'>
          <Carousel
            autoPlay={false}
            display='flex'
            navButtonsAlwaysVisible={true}
            indicators={false}
            //styling tiny dots at bottom
            indicatorIconButtonProps={{
              style: {
                padding: "5px", // 1
                color: "#32908F", // 3
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                backgroundColor: "#E4B363", // 2
              },
            }}
            indicatorContainerProps={{
              style: {
                marginTop: "30px", // 5
              },
            }}
            indicatorIcon={{
              style: {
                color: "#E4B363",
              },
            }}
            //styling arrow icons!
            fullHeightHover={false}
            navButtonsProps={{
              style: {
                backgroundColor: "#E4B363",
                color: "#32908F",
              },
            }}
            navButtonsWrapperProps={{
              style: {
                bottom: "0",
              },
            }}>
            {/* CURRENTLY OFFERING */}
            <TopRatedUsers />
            <TopRatedUsers />
          </Carousel>
        </Box>

        {/* TOP RATED BOONS AT BOTTOM */}
        <TopRatedBoons />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
