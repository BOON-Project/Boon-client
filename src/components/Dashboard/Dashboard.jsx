import React, { useEffect } from "react";
import {
    Typography,
    Box,
    Container,
    Card,
    CardContent,
} from "@material-ui/core";
import useStyles from "./styles";
import { getUsersAction } from "../../store/actions/usersAction";
import { useDispatch } from "react-redux";
import SkillByUser from "../SkillByUser/SkillByUser";
import Search from "../Home/Search";
import { getSkillsAction } from "../../store/actions/skillsActions";
import { getTasksAction } from "../../store/actions/tasksActions";
import Footer from "../Footer/Footer";

const Dashboard = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSkillsAction());
        dispatch(getUsersAction());
        dispatch(getTasksAction());
    }, [dispatch]);

    return (
        <>
            <Container
                maxWidth='lg'
                style={{
                    display: "flex",
                    minHeight: "100vh",
                    flexDirection: "column",
                }}
                className={classes.root}>
                {/* title */}
                <Box className={classes.box} >
                    <Typography variant='h2' color='primary'>
                        What can we do for you ?
                    </Typography>
                </Box>



                {/* SEARCH */}
                <Search />

                <SkillByUser />
            </Container>
            <Footer />
        </>
    );
};

export default Dashboard;
