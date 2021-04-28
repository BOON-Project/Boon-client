import React from "react";
import {Typography, Container, Box, Card, CardContent,CardActions, Button, TextField, CardMedia} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from "./styles"

const Search = () =>{
    const skills = ["pettsiting", "painting", "bricolage", "massage"]
    const classes = useStyles();
    return(
        <>
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
                <Button size="large" color="primary" variant="outlined" className={classes.tag}>Petsiting</Button>
                    <Button size="large" color="primary" variant="outlined" className={classes.tag}>Bricolage</Button>
                    <Button size="large" color="primary" variant="outlined" className={classes.tag}>Painting</Button>
                    <Button size="large" color="primary" variant="outlined" className={classes.tag}>Massage</Button>
                </Box>
        </>
    )

}

export default Search;