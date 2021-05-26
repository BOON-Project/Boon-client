import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./styles";

const TopCarousel = () => {
  const classes = useStyles();

  return (
    <>
      {/* ****************************************************************** */}

      {/* Adding carousel to them  */}
      <Box>
        <Carousel
          centerSlidePercentage={100}
          className={classes.carousel}
          autoPlay={true}
          display="flex"
          animation="slide"
          transition="2000ms"
          navButtonsAlwaysVisible={false}
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
              marginTop: "-30px", // 5
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
          {/* you can put here your divs! */}
          {/* Top main image */}
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
              <Typography variant="h5" style={{ fontWeight: "600" }}>
                HiveBoxx - Unsplash
              </Typography>
            </Box>
          </Box>

          <Box className={classes.hero3}>
            <Box align="center" className={classes.insideText}>
              Boon <br />
              The new social media
              <Typography variant="h5" style={{ fontWeight: "600" }}>
                Rebecca Grant - Unsplash
              </Typography>
            </Box>
          </Box>

          <Box className={classes.hero4}>
            <Box align="center" className={classes.insideText}>
              Boon <br />
              The new social media
              <Typography variant="h5" style={{ fontWeight: "600" }}>
                Adam Wilson - Unsplash
              </Typography>
            </Box>
          </Box>

          <Box className={classes.hero5}>
            <Box align="center" className={classes.insideText}>
              Boon <br />
              The new social media
              <Typography variant="h5" style={{ fontWeight: "600" }}>
                Kristina Tripkovic - Unsplash
              </Typography>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </>
  );
};

export default TopCarousel;
