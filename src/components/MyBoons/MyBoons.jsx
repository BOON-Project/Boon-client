import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useHistory } from "react-router";
import OfferedBoons from "./OfferedBoons";
import ReceivedBoons from "./ReceivedBoons";
import Footer from "../Footer/Footer";

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

    //if there's no user, go to login
    const user = useSelector((state) => state.userReducer.user);
    const linkConditional = () => {
        if (user) {

            return (
                <Link
                    style={{ textDecoration: "none" }}
                    to={{
                        pathname: `/RequestBoon/${tasks._id}`,
                        state: { user },
                    }}>
                    <Button
                        to='/home'
                        size='large'
                        //you can change this color as you like im only testing
                        color='primary'
                        variant='contained'
                        onClick={() => history.goBack()}
                        className={classes.button}>
                        Go back
                    </Button>
                </Link>
            );
        } else {
            return (
                <Button
                    textDecoration='none'
                    size='large'
                    color='secondary'
                    variant='contained'
                    className={classes.button}
                    onClick={() => history.push("/login")}>
                    Go to Login
                </Button>
            );
        }
    };

    return (
        <>
            <Box className={classes.box}>
                <Tabs
                    value={value}
                    indicatorColor='primary'
                    textColor='primary'
                    onChange={handleChange}
                    aria-label='disabled tabs example'>
                    {/* our 2 top tab options => */}

                    {/* first one for offered boons */}
                    <Tab
                        label='Offered by me '
                        onClick={() => setPage("OfferedBoons")}
                        selectionFollowsFocus
                    />

                    {/* second one for incoming boons */}
                    <Tab
                        label='I am the receiver'
                        onClick={() => setPage("ReceivedBoons")}
                    />
                </Tabs>


                <Chip
                      variant="outlined"
                      color="primary"
                      label={user.boonsHave}
                      icon={<AccountBalanceWalletIcon />}
                    />


            </Box>

            {/* main main container, white space in which we're gonna render  */}
            <Container maxWidth='md' className={classes.root}>
                <Grid container spacing={3}>
                    <Paper className={classes.paper}>
                        {page === "OfferedBoons" && <OfferedBoons />}
                        {page === "ReceivedBoons" && <ReceivedBoons />}
                    </Paper>
                </Grid>
            </Container>
            {/* Last last button at bottom */}
            <Box className={classes.buttonBox}>

                {linkConditional()}
            </Box>
                <Footer />


        </>
    );

};

export default MyBoons;
