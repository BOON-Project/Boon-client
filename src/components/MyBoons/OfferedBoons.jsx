import {
  Typography,
  Card,
  Grid,
  Avatar,
  CardContent,
  Chip,
} from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserOfferedTasksAction } from "../../store/actions/tasksActions";
const allImages = require.context("../../images", true, /.jpg$/);

const RequestedBoons = () => {

  const classes = useStyles();

  const tasks = useSelector((state) => state.tasksReducer.authUserOfferedTasks);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOfferedTasksAction());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={1}>
        {tasks &&
          tasks.map((task) => (
            <Grid item xs={12} key={task._id}>
              <Link
                to={{
                  pathname: `/MyBoons/${task._id}`,
                  state: { task },
                }}
                style={{
                  width: "100%",
                  textDecoration: "none",
                }}
              >
                <Card className={classes.ratingCard} elevation={8} p={2}>
                  <CardContent>
                    <Grid container alignItems={"stretch"}>
                      {/* image grid */}
                      <Grid item xs={4} className={classes.boxImage}>
                        <img
                          alt="img"
                          src={allImages(`./${task.skill.avatar}`).default}
                          className={classes.image}
                        ></img>
                      </Grid>
                      {/* info grid */}
                      <Grid item xs={5} className={classes.gridinfo}>
                        <Chip
                          label={task.skill.name}
                          variant="outlined"
                          color="primary"
                          className={classes.tag}
                        >
                          {task.skill.name}
                        </Chip>

                        <Typography>
                          <b>Boonee:</b> {task.boonee.userName}
                        </Typography>

                        {/* SKILL */}

                        {/* RATING TEXT */}
                        <Typography variant="body1" p={4}></Typography>
                        <Typography>
                          <b>Boons:</b> {task.boons}
                        </Typography>
                        <Typography>
                          <b>Boon ID: </b>
                          {task._id}
                        </Typography>
                        <Typography>
                          {" "}
                          <b>Date: </b>
                          {task.date.slice(0, 10)}
                        </Typography>
                      </Grid>
                      {/* avatar image */}
                      <Grid item xs={3} className={classes.avatarwrap}>
                        <Typography>{task.status}</Typography>
                        {/* avatar and small avatar (badge)*/}

                        <Avatar
                          className={classes.avatar}
                          alt="boonee avatar"
                          src={task.boonee.avatar}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </CardContent>

                  {/* </Box> */}
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default RequestedBoons;
