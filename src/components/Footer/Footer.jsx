import React from "react";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  // to go back
  const history = useHistory();

  //footer function !
  // FUNCTION COPYRIGHT
  function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {"Copyright © "}
        <Link s href="/" style={{color: 'white', textDecoration:'none'}}>
          Boon
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (




    <AppBar className={classes.footer} color="primary">
      <Container className={classes.container} align="center">
        <Toolbar align="center">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" color="inherit">
                <Copyright />
              </Typography>
              <Typography >
                <a href="https://icons8.com/icon/JoAq-WcWdsp8/jake" style={{color: 'white', textDecoration: 'none'}}>
                  Jake icon by Icons8
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
