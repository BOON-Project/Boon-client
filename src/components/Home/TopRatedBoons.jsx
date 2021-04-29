import React from "react";
import {Typography, Box, Card, CardActions, Button, CardMedia, Grid, FormRow} from "@material-ui/core"
import useStyles from "./styles"

const TopRatedBoons = () =>{
    const classes = useStyles();


    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
                <Card className={classes.card} elevation={8} >
                <Box p={3}>
                    <Typography variant="h4" color="primary">Bricolage</Typography>
                    <Typography variant="subtitle1">45</Typography>
                </Box>
                <CardMedia
                className={classes.media}
                image="https://picsum.photos/200"
                title="User picture"
                />
                <Typography variant="h6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum obcaecati, animi quod, quasi veniam, sunt natus fuga repellendus repellat ea tempore numquam quos aut veritatis eum dicta laborum vero quae nemo doloremque similique. Cum, harum facere nobis quia velit maxime, quis expedita perspiciatis fugit fuga obcaecati ipsam odit ducimus pariatur eligendi id omnis esse tenetur. Consequatur magnam blanditiis debitis placeat aperiam veniam odit temporibus veritatis expedita rerum. Neque quis voluptatibus reiciendis exercitationem nesciunt, recusandae temporibus voluptatum laborum eum doloremque unde laudantium, magnam, saepe illum vel nisi. A culpa quo ullam ea adipisci tempore repudiandae suscipit eaque consectetur laboriosam, vel atque.</Typography>
                
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className={classes.card} elevation={8} >
                <Box p={3}>
                    <Typography variant="h4" color="primary">Bricolage</Typography>
                    <Typography variant="subtitle1">From 20 boons</Typography>
                </Box>
                <CardMedia
                className={classes.media}
                image="https://picsum.photos/200"
                title="User picture"
                />
                <CardActions style={{padding:"0"}}>
                    <Button size="large" color="primary" variant="contained" className={classes.button}>More</Button>
                </CardActions>
                </Card>
            </Grid>
          </React.Fragment>
        );
      }
    
      return (
        <div className={classes.root}>
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