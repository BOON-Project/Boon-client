import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../../styles/index.css";
import useStyles from "./styles";
import {
  TextField,
  Box,
  Typography,
  Grid,
  FormControl,
  Button,
} from "@material-ui/core";
import video from "../../images/contact.mp4";

export default function Contact() {
  const classes = useStyles();
  const [state, handleSubmit] = useForm("xjvanekw");
  if (state.succeeded) {
    return <Typography variant='h1' align='center' color='primary'>Thanks for your message!
<br/>
    <b/> While you wait try typing
        <br/>
      <span className={classes.boonz}>BOON</span>

    </Typography>;

  }

  return (
    <>
      <Grid container spacing={3} className={classes.contact}>
        <Grid
          item
          xs={12}
          md={6}
          id="no-hecking-padding"
          className={classes.videoWrap}
        >
          <video autoPlay muted autoplay="1" className={classes.video}>
            <source src={video} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
          </video>
        </Grid>
        <Grid item xs={12} md={6} className={classes.formWrapper}>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Box pt="2rem" className={classes.wrapper}>
              <Typography variant="h6" color="primary">
                Do you have any questions?
              </Typography>
              <TextField
                label="Name"
                id="standard-size-small"
                placeholder="type your name"
                size="small"
                name="name"
              />
              <TextField
                label="Email"
                id="standard-size-small"
                placeholder="type your email address"
                size="small"
                name="email"
              />
              <TextField
                label="Subject"
                id="standard-size-small"
                placeholder="type the subject"
                size="small"
                name="subject"
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                placeholder="Type your message here"
                variant="outlined"
                name="message"
              />
              <Button
                type="submit"
                size="large"
                //you can change this color as you like im only testing
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Send
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
