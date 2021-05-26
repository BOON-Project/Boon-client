import { Box, Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTasksAction } from "../../store/actions/tasksActions";
import useStyles from "./styles";
import ResponsiveDrawer from "./Drawer";
import { useHistory } from "react-router";
import OfferedBoons from "./OfferedBoons";

const MyBoons = () => {
    const tasks = useSelector((state) => state.tasksReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer.user._id);

    const classes = useStyles();
    return (
        <>
            <Container maxWidth='md' className={classes.root}>
                <Grid container spacing={3}>
                    <ResponsiveDrawer />
                    <Paper className={classes.paper}>
                        <OfferedBoons />
                    </Paper>
                </Grid>
            </Container>
            <Box>
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
