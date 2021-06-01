import React, { useEffect } from "react";

//stylinggggggggggggggggggggggggggggggggggggggggggg
import useStyles from "./styles";
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Typed from "react-typed";
import TopCarousel from "./TopCarousel";

//components
import CurentlyOffering from "./CurrentlyOffering";
import TopRatedUsers from "./TopRatedUsers";
import TopRatedBoons from "./TopRatedBoons";
import Footer from "../Footer/Footer";

//REDUX
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
  }, [dispatch]);

  return (
    <>
      {/* Top main image */}

      <Box className={classes.root}>
        <TopCarousel />
      </Box>

      {/* ****************************************************************** */}
      <Container maxWidth="lg" className={classes.root}>
        {/* DICTIONARY CARD */}
        <Card className={classes.booncard} elevation={8}>
          <CardContent>
            <Box pb={2}>
              <Typography
                variant="h2"
                color="secondary"
                style={{ fontWeight: 600 }}
              >
                Boon
              </Typography>
              <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
                /buːn/
              </Typography>
            </Box>

            {/* small typing animation 1 */}
            <Typography variant="h4" color="initial">
              <Typed
                strings={["1. A thing that is helpful or beneficial"]}
                typeSpeed={40}
                showCursor={false}
              />
            </Typography>

            {/* small typing animation 2 */}
            <Typography variant="h4" color="initial">
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
          <Typography variant="h4" color="inherit">
            {" "}
            We make exchange based economy a reality with our money free
            platform
          </Typography>
        </Box>
        {/* ***************************************************************** */}

        {/* SEARCH */}
        {/* <Search> this is explore component!!
        <SkillByUser />
      </Search> */}

        {/* Adding carousel to them  */}
        <Box height="41rem" display="flex">
          <Carousel
            centerSlidePercentage={55}
            className={classes.carousel}
            autoPlay={false}
            display="flex"
            animation="slide"
            navButtonsAlwaysVisible='true'
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
            }}
          >
            {/* CURRENTLY OFFERING */}
            <CurentlyOffering />
            <CurentlyOffering />
            <CurentlyOffering />
          </Carousel>
        </Box>

        {/* TOP RATED BOONERS // kein carousel */}
            <TopRatedUsers />
        {/* it works better without carousel!  */}


        {/* TOP RATED BOONS AT BOTTOM */}
        <TopRatedBoons />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
