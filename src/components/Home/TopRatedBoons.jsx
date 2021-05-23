import React from "react";
import { useSelector } from "react-redux";
import {
    Typography,
    Box,
    Card,
    Button,
    Grid,
    Avatar,
    CardContent,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import Boons from "../../images/Boons.svg";

const TopRatedBoons = () => {
    const classes = useStyles();

    const tasks = useSelector((state) => state.tasksReducer);

    const users = useSelector((state) => state.usersReducer.allUsers);

    const sortedTasks = tasks
        .filter((task) => task.rating > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
    // console.log("sorted", sortedTasks);

    // GRID
    return (
        <>
            <Box my={8} display='flex' alignItems='center'>
                <Box display='flex' flexGrow={1}>
                    <img src={Boons} alt='happy-booners' height='200' />
                </Box>
                <Box>
                    <Typography variant='h2' color='primary'>
                        Top Rated Boons
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={1}>
                {sortedTasks.map((task) => {
                    const rating = task.rating;
                    return (
                        <Grid item xs={12} md={6} key={task._id}>
                            <Card
                                className={classes.ratingCard}
                                elevation={8}
                                p={2}>
                                {/* NAMES RATING AND SKILL CONTAINER */}
                                <CardContent>
                                    <Grid container alignItems={"stretch"}>
                                        <Grid item xs={9}>
                                            <b>Bonee:</b> {task.boonee.userName}
                                        </Grid>
                                        <Grid item xs={9}>
                                            <b>Booner:</b>{" "}
                                            {task.booner.userName}
                                        </Grid>
                                        {/* avatar */}
                                        <Avatar
                                            className={classes.miniavatar}
                                            alt='boonee avatar'
                                            src={task.booner.avatar}
                                        />
                                    </Grid>

                                    {/* RATING */}
                                    <Box my={1}>
                                        <Rating
                                            name='read-only'
                                            value={rating}
                                            readOnly
                                        />
                                    </Box>
                                    {/* SKILL */}
                                    <Box mb={1}>
                                        <Button
                                            disabled
                                            size='small'
                                            color='info'
                                            variant='outlined'
                                            className={classes.tag}>
                                            {task.skill.name}
                                        </Button>
                                    </Box>
                                    {/* RATING TEXT */}
                                    <Typography variant='body1' p={4}>
                                        {task.message}
                                    </Typography>
                                </CardContent>
                                {/* </Box> */}
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default TopRatedBoons;
