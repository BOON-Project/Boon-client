import { Box, Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTasksAction } from "../../store/actions/tasksActions";
import useStyles from "./styles";
import BoonNavBar from "./BoonNavBar";

import { useHistory } from "react-router";
import OfferedBoons from "./OfferedBoons";
import ReceivedBoons from "./ReceivedBoons";

const MyBoons = () => {
    const tasks = useSelector((state) => state.tasksReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const classes = useStyles();
    return (
        <>
            <BoonNavBar />
            <Container maxWidth='md' className={classes.root}>
                <Grid container spacing={3}>
                    <Paper className={classes.paper}>
                        <OfferedBoons />
                        <ReceivedBoons />
                    </Paper>
                </Grid>
            </Container>
            <Box className={classes.buttonBox}>
                <Button
                    size='large'
                    color='primary'
                    variant='outlined'
                    onClick={() => history.goBack()}>
                    Take me back
                </Button>
            </Box>
        </>
    );
};

export default MyBoons;
