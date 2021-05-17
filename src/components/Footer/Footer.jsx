import React from "react";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  // to go back
  const history = useHistory();

  //footer function !
  // FUNCTION COPYRIGHT
  function Copyright() {
    return (
      <Typography variant='body2' color='white' align='center'>
        {"Copyright © "}
        <Link color='white' href='/'>
          Boon
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Box align='center'>
      <AppBar className={classes.footer} color='primary'>
        <Container className={classes.container} align='center'>
          <Typography align='center' color='inherit'>
            <Copyright />
          </Typography>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
