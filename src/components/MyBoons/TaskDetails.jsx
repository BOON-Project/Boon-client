import {
    Paper,
    Typography,
    Box,
    Card,
    Button,
    Grid,
    Avatar,
    CardContent,
    Container,
    Chip,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const allImages = require.context("../../images", true, /.jpg$/);

const TaskDetails = (props) => {
    const classes = useStyles();
    const task = props.location.state.task;

    //console.log(task.boonee.firstName);
    return (
        <Container maxWidth='md' className={classes.root}>
            <Paper className={classes.paperTaskDetails}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Typography>{task.date}</Typography>

                        <Typography>{task._id}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {" "}
                        {/* avatar and small avatar (badge)*/}
                        <Avatar
                            className={classes.avatar}
                            alt='boonee avatar'
                            src={task.boonee.avatar}></Avatar>
                    </Grid>
                    <Grid item xs={4}>
                        {" "}
                        <Chip
                            label={task.skill.name}
                            variant='outlined'
                            color='info'
                            variant='outlined'
                            className={classes.tag}>
                            {task.skill.name}
                        </Chip>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography>Message:</Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography variant='body1' p={4}>
                            {task.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12}>
                        {" "}
                        <img
                            src={allImages(`./${task.skill.avatar}`).default}
                            className={classes.taskimg}></img>
                    </Grid>

                    {/* NAMES RATING AND SKILL CONTAINER */}
                    <Typography>
                        <b>Bonee:</b> {task.boonee.userName}
                    </Typography>

                    {/* SKILL */}

                    {/* RATING TEXT */}
                    <Typography variant='body1' p={4}>
                        {task.status}
                    </Typography>

                    <Typography>{task.status}</Typography>
                </Grid>
            </Paper>
        </Container>
    );
};

export default TaskDetails;
