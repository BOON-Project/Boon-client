import {
    Typography,
    Box,
    Card,
    Button,
    Grid,
    Avatar,
    CardContent,
    Badge,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getUserReceivedTasksAction } from "../../store/actions/tasksActions";
import Alert from "@material-ui/lab/Alert";
const allImages = require.context("../../images", true, /.jpg$/);

const RequestedBoons = () => {
    const classes = useStyles();
    const tasks = useSelector(
        (state) => state.tasksReducer.authUserReceivedTasks
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserReceivedTasksAction());
    }, []);
    // const [alertSeverity, setAlertSeverity] = useState({
    //     severity: ["warning", "success", "error"],
    // });
    // const handleSeverity = () => {
    //     if (task.status === "pending") return setAlertSeverity("warning");
    // };
    return (
        <>
            <Grid container spacing={1}>
                {tasks.map((task) => (
                    <Grid item xs={12} key={task._id}>
                        <Card
                            className={classes.ratingCard}
                            elevation={8}
                            p={2}>
                            <CardContent>
                                <Grid container alignItems={"stretch"}>
                                    <Grid item xs={4}>
                                        <img
                                            alt='skill'
                                            src={
                                                allImages(
                                                    `./${task.skill.avatar}`
                                                ).default
                                            }
                                            className={classes.image}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Box ml={1}>

                                        {/* NAMES RATING AND SKILL CONTAINER */}
                                        <Typography>
                                            <b>Booner:</b>{" "}
                                            {task.booner.userName}
                                        </Typography>

                                        {/* SKILL */}

                                        <Button
                                            size='small'
                                            color='info'
                                            variant='outlined'
                                            className={classes.tag}>
                                            {task.skill.name}
                                        </Button>
                                        {/* RATING TEXT */}
                                        <Typography variant='body1' p={4}>
                                            {task.status}
                                        </Typography>

                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={3}
                                        className={classes.avatarwrap}>
                                        <Alert
                                            variant='filled'
                                            severity='warning'>
                                            <Typography>
                                                {task.status}
                                            </Typography>
                                        </Alert>
                                        {/* avatar and small avatar (badge)*/}

                                        <Avatar
                                            className={classes.avatar}
                                            alt='boonee avatar'
                                            src={task.booner.avatar}></Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>

                            {/* </Box> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default RequestedBoons;
