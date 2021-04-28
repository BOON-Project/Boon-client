import React from 'react'
import {Typography, Container, Box, Card, CardContent,CardActions, Button, TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "../styles/home.scss"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: "5%",
        },
    
    card:{
        marginTop: "40px",
        padding: "40px",
        margin: "20px"
    },

    circle:{
        marginLeft: "40px"
    },

    button:{
        width: "100%"
    }
});

    
const skills = ["pettsiting", "painting", "bricolage", "massage"]

const Home = () => {
    const classes = useStyles();
    
    return (
        <Container maxWidth="lg" className={classes.root}>
                {/* DICTIONARY CARD */}
                <Card className={classes.card} elevation={8}>
                    <CardContent>
                        <Box pb={2}>
                            <Typography variant="h2" color="primary">Boon</Typography>
                            <Typography variant="subtitle1">/buːn/</Typography>
                        </Box>
                        <Typography variant="h5" color="info">1. A thing that is helpful or beneficial</Typography>
                        <Typography variant="h5" color="info">2. A favour or request.</Typography>
                    </CardContent>
                </Card>

                {/* SEARCH */}
                <Box pt="2rem">
                            <Typography variant="h5" color="info"> We make exchange based economy a reality with our money free exchange platform  </Typography>
                            <Typography variant="h6" color="info"> Explore our tags and search for what you need  </Typography>
                </Box>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={skills.map((skill) => skill)}
                    renderInput={(params) => (
                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                    )}
                />    
                <Box display="flex">
                    <Button size="large" color="primary" variant="outlined" >Pettsiting</Button>
                    <Button size="large" color="primary" variant="outlined" >Bricolage</Button>
                    <Button size="large" color="primary" variant="outlined" >Painting</Button>
                    <Button size="large" color="primary" variant="outlined" >Massage</Button>
                </Box>



                {/* CURRENTLY OFFERING */}
                <Box mt={8} display="flex"  alignItems="center">
                    <Typography variant="h2" color="secondary">Currently offering</Typography>
                    <FiberManualRecordIcon className={classes.circle} fontSize="small" />
                    <FiberManualRecordIcon className={classes.circle} fontSize="small" />
                    <FiberManualRecordIcon className={classes.circle} fontSize="small" />
                </Box>
                <Box mt={5} display="flex" textAlign="center">
                    <Card className={classes.card} elevation={8} >
                        <Typography variant="h4" color="primary">Bricolage</Typography>
                        <Typography variant="subtitle1">From 20 boons</Typography>
                        <CardActions>
                            <Button size="large" color="primary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card} elevation={8} >
                        <Typography variant="h4" color="primary">Pet sitting</Typography>
                        <Typography variant="subtitle1">From 30 boons</Typography>
                        <CardActions>
                            <Button size="large" color="primary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card} elevation={8} >
                        <Typography variant="h4" color="primary">Painting</Typography>
                        <Typography variant="subtitle1">From 50 boons</Typography>
                        <CardActions>
                            <Button size="large" color="primary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card} elevation={8} >
                        <Typography variant="h4" color="primary">Hair Styling</Typography>
                        <Typography variant="subtitle1">From 60 boons</Typography>
                        <CardActions>
                            <Button size="large" color="primary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>
                </Box>
        </Container>
    )
}


export default Home
