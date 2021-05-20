import { Link } from "react-router-dom";
import useStyles from "./styles";
import { TextField, Box, Typography } from "@material-ui/core";

export default function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Box pt="2rem" className={classes.wrapper}>
          <Typography variant="h6" color="info">
            Do you have any questions?
          </Typography>
          <TextField
            label="Name"
            id="standard-size-small"
            placeholder="type your name"
            size="small"
          />
          <TextField
            label="Email"
            id="standard-size-small"
            placeholder="type your email address"
            size="small"
          />
          <TextField
            label="Subject"
            id="standard-size-small"
            placeholder="type the subject"
            size="small"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            placeholder="Type your message here"
            variant="outlined"
          />
        </Box>
      </form>
    </>
  );
}
