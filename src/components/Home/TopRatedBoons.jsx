import React from "react";
import {Typography, Box, Card, CardActions, Button, CardMedia, Grid, Avatar, makeStyles} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import useStyles from "./styles"

const TopRatedBoons = () =>{
    const classes = useStyles();

    // CONTENT INSIDE EACH CARD
    function FormRow() {
        return (
          
          <React.Fragment>
            <Grid item xs={6}>

                <Card className={classes.card} elevation={8} >

                  {/* AVATAR AND INFO GRID  */}
                <Grid item container m={8} justify="space-between" className={classes.avatarDiv}>
                    <Grid item xs={4}>
                    <Box p={4}>
                        <Typography> Bonee </Typography>
                        <Typography> 22/04/2021 </Typography>
                        <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                        <Box display="flex" >
                            <StarIcon color="secondary"/>
                            <StarIcon color="secondary"/>
                            <StarIcon color="secondary"/>
                            <StarIcon color="secondary"/>
                            <StarBorderOutlinedIcon color="secondary"/>
                        </Box>
                    </Box>
                    </Grid>
                    <Grid item container xs={4} justify="center">
                    <Box p={4}> 
                      <Avatar alt="Remy Sharp" src="https://picsum.photos/200" className={classes.avatar} />
                    </Box>
                    </Grid>
                </Grid>
                
                {/* RAING TEXT */}
               <Box p={4}> 
                 <Typography variant="body1" p={4}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum obcaecati, animi quod, quasi veniam, sunt natus fuga repellendus repellat ea tempore numquam quos aut veritatis eum dicta laborum vero quae nemo doloremque similique. Cum, harum facere nobis quia velit maxime, quis expedita perspiciatis fugit fuga obcaecati ipsam odit ducimus pariatur eligendi id omnis esse tenetur. </Typography>
                </Box>
                
                </Card>
            </Grid>

            <Grid item xs={6}>

                <Card className={classes.card} elevation={8} >
                  
                  {/* AVATAR AND INFO GRID  */}
                <Grid item container m={8} justify="space-between" className={classes.avatarDiv}>
                    <Grid item xs={4}>
                    <Box p={4}>
                        <Typography> Bonee </Typography>
                        <Typography> 22/04/2021 </Typography>
                        <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                        <Box display="flex" >
                            <StarIcon color="secondary"/>
                            <StarIcon color="secondary"/>
                            <StarIcon color="secondary"/>
                            <StarIcon color="secondary"/>
                            <StarBorderOutlinedIcon color="secondary"/>
                        </Box>
                    </Box>
                    </Grid>
                    <Grid item container xs={4} justify="center">
                    <Box p={4}> 
                      <Avatar alt="Remy Sharp" src="https://picsum.photos/200" className={classes.avatar} />
                    </Box>
                    </Grid>
                </Grid>
                
                {/* RAING TEXT */}
               <Box p={4}> 
                 <Typography variant="body1" p={4}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum obcaecati, animi quod, quasi veniam, sunt natus fuga repellendus repellat ea tempore numquam quos aut veritatis eum dicta laborum vero quae nemo doloremque similique. Cum, harum facere nobis quia velit maxime, quis expedita perspiciatis fugit fuga obcaecati ipsam odit ducimus pariatur eligendi id omnis esse tenetur. </Typography>
                </Box>
                
                </Card>
            </Grid>
          </React.Fragment>
        );
      }
      // GRID STRUCTURE
      return (
        <div className={classes.root}>
          <Typography variant="h2" color="secondary"> Top rated Boons </Typography>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
          </Grid>
        </div>
      );
}

export default TopRatedBoons;