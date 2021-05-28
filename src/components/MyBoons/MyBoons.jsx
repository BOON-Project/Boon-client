import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useHistory } from "react-router";
import OfferedBoons from "./OfferedBoons";
import ReceivedBoons from "./ReceivedBoons";

const MyBoons = () => {
  const tasks = useSelector((state) => state.tasksReducer);
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // in order to use material ui we need =>
  const classes = useStyles();

  //managing an array of menu items and we're gonna select component that will render
  const [page, setPage] = useState("OfferedBoons");

  return (
    <>
      <Box className={classes.box}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          {/* our 2 top tab options => */}

          {/* first one for offered boons */}
          <Tab
            label="Offered Boons"
            onClick={() => setPage("OfferedBoons")}
            selectionFollowsFocus
          />

          {/* second one for incoming boons */}
          <Tab
            label="Incoming Boons"
            onClick={() => setPage("ReceivedBoons")}
          />
        </Tabs>
      </Box>

      {/* main main container, white space in which we're gonna render  */}
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={3}>
          <Paper className={classes.paper}>
            {page === "OfferedBoons" && <OfferedBoons />}
            {page === "ReceivedBoons" && <ReceivedBoons />}
          </Paper>
        </Grid>
      </Container>

      {/* Last last button at bottom */}
      <Box className={classes.buttonBox}>
        <Button
          to="/home"
          size="large"
          //you can change this color as you like im only testing
          color="primary"
          variant="contained"
          onClick={() => history.goBack()}
          className={classes.button}
        >
          Take me back
        </Button>
      </Box>
    </>
  );
};

export default MyBoons;
