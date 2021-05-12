import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";





const Skill = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersReducer);
  const classes = useStyles();


  //rendering part!
  return (
    <>

    <Container component='main' maxWidth='md'>
    <CssBaseline />

    {/* Title */}
    <div className={classes.paper}>
					<Typography component="h1" color="primary" variant="h3" mt="2">
					 User by skills
					</Typography>

      {/* Form! */}




      </div>
    </Container>
</>



  )
}

export default Skill