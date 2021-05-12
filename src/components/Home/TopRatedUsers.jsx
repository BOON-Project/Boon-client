import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  Avatar,
  Grid,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const TopRatedUsers = () => {
  const classes = useStyles();

  const users = useSelector((state) => state.usersReducer.allUsers);

  return (
    // TITLE
    <>
      <Box my={8} display="flex" alignItems="center">
        <Typography variant="h2" color="primary">
          Top Rated Booners
        </Typography>
      </Box>

      {/* CARDS */}
      <Grid container spacing={1}>
        {/* SORTING THE 4 BEST USERS AND MAPING THEM */}
        {users
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4)
          .map((user) => {
            return (
              <Grid item xs={12} md={3}>
                <Card className={classes.userCard} elevation={8} key={user._id}>
                  <Box display="flex" flexDirection="column">
                    <Box m={3}>
                      {/* NAME */}
                      <Typography variant="h4" color="info">
                        {user.userName}
                      </Typography>
                      {/* RATING */}
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography variant="h6" color="info">
                          {user.rating}
                        </Typography>
                        <StarIcon color="secondary" />
                      </Box>
                      <Box m={4} display="flex" justifyContent="center">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://picsum.photos/200"
                          className={classes.avatarBooners}
                        />
                      </Box>

                      {/* MAP THROUGHT THE SKILLS */}
                      {user.skills.map((skill) => {
                        return (
                          <Box
                            display="flex"
                            justifyContent="center"
                            flexDirection="column"
                            pt={1}
                            key={skill.skillID._id}
                          >
                            <Button
                              size="medium"
                              color="info"
                              variant="outlined"
                              className={classes.tag}
                            >
                              {skill.skillID.name}
                            </Button>
                          </Box>
                        );
                      })}
                    </Box>
                    <CardActions style={{ padding: "0" }}>
                      <Link
                        to={{
                          pathname: `/UserProfile/${user._id}`,
                          state: { user },
                        }}
                        style={{ width: "100%" }}
                      >
                        <Button
                          size="large"
                          color="secondary"
                          variant="contained"
                          className={classes.button}
                        >
                          More
                        </Button>
                      </Link>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default TopRatedUsers;
