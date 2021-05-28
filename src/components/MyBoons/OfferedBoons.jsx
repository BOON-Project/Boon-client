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
import React, { useEffect } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getUserOfferedTasksAction } from "../../store/actions/tasksActions";
import Alert from "@material-ui/lab/Alert";
const allImages = require.context("../../images", true, /.jpg$/);

const RequestedBoons = () => {
    const classes = useStyles();
    const tasks = useSelector(
        (state) => state.tasksReducer.authUserOfferedTasks
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOfferedTasksAction());
    }, []);

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
                                        <Box ml={2}>
                                            <Typography>
                                                <b>Boonee:</b>{" "}
                                                {task.boonee.userName}
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
                                                {/* {task.message} */}
                                            </Typography>
                                        </Box>
                                        {/* NAMES  AND SKILL CONTAINER */}
                                    </Grid>
                                    <Grid
                                        item
                                        xs={3}
                                        className={classes.avatarwrap}>
                                        <div>
                                            <Typography>
                                                {task.status}
                                            </Typography>
                                        </div>
                                        {/* avatar and small avatar (badge)*/}

                                        {/* avatar and small avatar (badge)*/}

                                        <Avatar
                                            className={classes.avatar}
                                            alt='boonee avatar'
                                            src={task.boonee.avatar}></Avatar>
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
