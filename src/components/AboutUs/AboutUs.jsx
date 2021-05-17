import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from "./styles";
import Footer from "../Footer/Footer";


//styling=>
import {
    Typography,
    Box,
    Container,
    Button,
    TextField,
    InputLabel,
    Select,
    ButtonGroup,

  } from "@material-ui/core";


export default function AboutUs() {
  const classes = useStyles();


    return (
        <>
<Container maxWidth="lg" className={classes.root}>
        {/* Title */}
        <Box className={classes.box} mt={4}>
        <Typography variant="h1" color="primary" >
              About Us
            </Typography>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </Box>

</Container>
      <Footer />
      </>
    );
  }

