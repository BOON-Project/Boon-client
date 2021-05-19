import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

//styling=>
import {
  Avatar,
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Paper,
} from "@material-ui/core";

//pictures for the page
import team from "../../images/people-discussion-5069845_1920.jpg";
import berlin from "../../images/architecture-3171308_1920.jpg";
import dog from "../../images/woman-6197737_1920.jpg";
import guitar from "../../images/guitar-5531027_1920.jpg";
import friends from "../../images/friends-581753_1920.jpg";
import cindy from "../../images/cindy.jpg";
import eniko from "../../images/eniko.jpg";
import aza from "../../images/aza.jpg";
import Footer from "../Footer/Footer";

export default function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        {/* Title */}
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.hero}>
            <Grid item xs={5}>
              <Typography variant="h1" color="primary">
                The vision behind boon
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              non excepturi unde deleniti, enim facere accusamus rerum qui
              architecto doloremque ratione? Quod nam voluptas aperiam nesciunt
              cupiditate enim libero explicabo quam expedita molestiae, harum,
              non odio dolorem, labore placeat optio? Velit temporibus, modi
              earum consequatur itaque aut rerum necessitatibus eius ducimus,
              repellendus quidem quas voluptate eaque! Impedit molestias animi
              rem?
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={friends}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Community
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt, sapiente explicabo? Cupiditate deleniti et, iusto
                    voluptas animi sint praesentium qui.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={guitar}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Berlin
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    nulla magni cum exercitationem veniam nisi et ipsam officia
                    adipisci labore, laboriosam eveniet quibusdam animi incidunt
                    necessitatibus accusantium sint odio voluptates.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={dog}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Connection
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, nemo alias accusantium quas eum doloribus
                    similique non natus delectus animi cumque quam ea quos
                    voluptates obcaecati assumenda. Cum, quae dolorem.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Box className={classes.box} mt={4}>
          <Typography variant="h1" color="primary">
            Meet the team
          </Typography>
          <p>Want to join us?</p>
          <p>Open positions</p>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea className={classes.intro}>
                <Avatar className={classes.avatar} src={cindy} title="Cindy" />
                <CardContent>
                  <Typography align="center" variant="h5" component="h2">
                    Cindy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt, sapiente explicabo? Cupiditate deleniti et, iusto
                    voluptas animi sint praesentium qui.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea className={classes.intro}>
                <Avatar className={classes.avatar} src={aza} title="Azael" />
                <CardContent>
                  <Typography align="center" variant="h5" component="h2">
                    Azael
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    nulla magni cum exercitationem veniam nisi et ipsam officia
                    adipisci labore, laboriosam eveniet quibusdam animi incidunt
                    necessitatibus accusantium sint odio voluptates.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea className={classes.intro}>
                <Avatar className={classes.avatar} src={eniko} title="Enikö" />
                <CardContent>
                  <Typography align="center" variant="h5" component="h2">
                    Enikö
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, nemo alias accusantium quas eum doloribus
                    similique non natus delectus animi cumque quam ea quos
                    voluptates obcaecati assumenda. Cum, quae dolorem.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
