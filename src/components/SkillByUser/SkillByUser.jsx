import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  Avatar,
  Grid,
  Container,
  CssBaseline,
  TextField,
  ButtonGroup,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";

const SkillByUser = () => {
  const classes = useStyles();
   // to go back
   const history = useHistory();
  const users = useSelector((state) => state.usersReducer.usersWithSkill);
  console.log("state", users);


  return (
    <>
      <Box className={classes.main} my={8} display='flex' alignItems='center'>
        <Typography variant='h2' color='primary'>
          Available users
        </Typography>
      </Box>

      {/* CARDS */}
      <Grid container spacing={1}>
        {/* SORTING THE 4 BEST USERS AND MAPING THEM */}
        {users &&
          users
            .sort((a, b) => b.rating - a.rating)
            .map((user) => {
              return (
                <Grid item xs={12} md={3}>
                  <Card
                    className={classes.userCard}
                    elevation={8}
                    key={user._id}>
                    <Box display='flex' flexDirection='column'>
                      <Box m={3}>
                        {/* NAME */}
                        <Typography variant='h4' color='info'>
                          {user.userName}
                        </Typography>
                        {/* RATING */}
                        <Box
                          display='flex'
                          justifyContent='center'
                          alignItems='center'>
                          <Typography variant='h6' color='info'>
                            {user.rating}
                          </Typography>
                          <StarIcon color='secondary' />
                        </Box>
                        <Box m={4} display='flex' justifyContent='center'>
                          <Avatar
                            alt='Remy Sharp'
                            src={user.avatar}
                            className={classes.avatarBooners}
                          />
                        </Box>

                        {/* MAP THROUGHT THE SKILLS */}
                        {user.skills.map((skill) => {
                          return (
                            <Box
                              display='flex'
                              justifyContent='center'
                              flexDirection='column'
                              pt={1}
                              key={skill.skillID._id}>
                              <Button
                                size='medium'
                                color='info'
                                variant='outlined'
                                className={classes.tag}>
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
                          style={{ width: "100%" }}>
                          <Button
                            size='large'
                            color='secondary'
                            variant='contained'
                            className={classes.button}>
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

export default SkillByUser;
