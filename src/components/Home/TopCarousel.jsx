import React from "react";
import { Typography, Box } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./styles";

const TopCarousel = () => {
  const classes = useStyles();

  return (
    <>
      {/* ****************************************************************** */}

      {/* Adding carousel to them  */}

      <Carousel
        centerSlidePercentage={100}
        className={classes.carousel}
        autoPlay='true'
        display="flex"
        animation="slide"
        navButtonsAlwaysVisible={false}
        indicators={false}
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
        <Box className={classes.hero1}>
          <Box align="center" className={classes.insideText}>
            Boon <br />
            The new social media
            <Typography variant="h6">Hanna Morris - Unsplash</Typography>
          </Box>
        </Box>

        <Box className={classes.hero2}>
          <Box align="center" className={classes.insideText}>
            Boon <br />
            The new social media
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              HiveBoxx - Unsplash
            </Typography>
          </Box>
        </Box>

        <Box className={classes.hero3}>
          <Box align="center" className={classes.insideText}>
            Boon <br />
            The new social media
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Rebecca Grant - Unsplash
            </Typography>
          </Box>
        </Box>

        <Box className={classes.hero4}>
          <Box align="center" className={classes.insideText}>
            Boon <br />
            The new social media
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Adam Wilson - Unsplash
            </Typography>
          </Box>
        </Box>

        <Box className={classes.hero5}>
          <Box align="center" className={classes.insideText}>
            Boon <br />
            The new social media
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Kristina Tripkovic - Unsplash
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};

export default TopCarousel;
