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
import Booners from "../../images/Booners.svg";

const TopRatedUsers = () => {
    const classes = useStyles();

    const users = useSelector((state) => state.usersReducer.allUsers);

    return (
        // TITLE
        <>
            <Box my={8} display='flex' alignItems='center'>
                <Box display='flex' justifyContent='center'>
                    <img src={Booners} alt='happy-booners' height='200' />
                </Box>
                <Typography variant='h2' color='primary'>
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
                                <Card
                                    className={classes.userCard}
                                    elevation={4}
                                    key={user._id}>
                                    <Box display='flex' flexDirection='column'>
                                        <Box m={3}>
                                            {/* NAME */}
                                            <Typography
                                                variant='h4'
                                                color='info'>
                                                {user.userName}
                                            </Typography>
                                            {/* RATING */}
                                            <Box
                                                display='flex'
                                                justifyContent='center'
                                                alignItems='center'>
                                                <Typography
                                                    variant='h6'
                                                    color='info'>
                                                    {user.rating}
                                                </Typography>
                                                <StarIcon color='secondary' />
                                            </Box>
                                            <Box
                                                m={4}
                                                display='flex'
                                                justifyContent='center'>
                                                <Avatar
                                                    alt='Remy Sharp'
                                                    src={user.avatar}
                                                    className={
                                                        classes.avatarBooners
                                                    }
                                                />
                                            </Box>

                                            {/* MAP THROUGHT THE SKILLS */}
                                            {[] ||
                                                user.skills.map((skill) => {
                                                    return (
                                                        <Box
                                                            display='flex'
                                                            justifyContent='center'
                                                            flexDirection='column'
                                                            pt={1}
                                                            key={
                                                                skill.skillID
                                                                    ._id
                                                            }>
                                                            <Button
                                                                size='medium'
                                                                color='info'
                                                                variant='outlined'
                                                                className={
                                                                    classes.tag
                                                                }>
                                                                {
                                                                    skill
                                                                        .skillID
                                                                        .name
                                                                }
                                                            </Button>
                                                        </Box>
                                                    );
                                                })}
                                        </Box>
                                        <CardActions
                                            style={{ padding: "10px" }}>
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

export default TopRatedUsers;
