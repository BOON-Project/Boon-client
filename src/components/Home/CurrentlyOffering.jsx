import React from "react";
import {Link} from 'react-router-dom'
import {Typography, Box, Card, CardActions, Button, CardMedia, Grid} from "@material-ui/core"
import useStyles from "./styles"
import { useSelector } from "react-redux";

const CurentlyOffering = () => {
    
    const classes = useStyles();
    const skillsData = useSelector((state) => state.skillsReducer);
    // Create an array with five different skills from skills database
    const randomSkills = []
    for(let i=0; i<=5; i++){
        const randomNumberRange = Math.floor(Math.random() * (skillsData.length - 0) + 0)
        if(!randomSkills.includes(skillsData[randomNumberRange])){
            randomSkills.push(skillsData[randomNumberRange])
        }
    }

    return(
    <>
    <Box mt={8} display="flex"  alignItems="center">
        <Typography variant="h2" color="secondary">Currently offering</Typography>
    </Box>

    {/* CARDS */}

    <Grid item xs={12} display="flex">

    <Box mt={5} display="flex" textAlign="center" justifyContent="center">
        {randomSkills.length>1&& randomSkills.map((skill)=>{
        return(  
            <Card className={classes.card} elevation={12} key={skill._id}>
                <Box p={3}>
                    <Typography variant="h4" color="primary">{skill.name}</Typography>
                </Box>
                <CardMedia
                className={classes.media}
                image="https://picsum.photos/200"
                title="User picture"
                />
               
                <CardActions style={{padding:"0"}}>
                    <Button
                    size="large" color="primary" variant="contained" className={classes.button}>More</Button>
                </CardActions>
            </Card>
        )})}
    </Box>
    </Grid>
    </>
    )
}

export default CurentlyOffering;