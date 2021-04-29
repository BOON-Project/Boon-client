import React from "react";
import {Typography, Box, Card, CardActions, Button, CardMedia} from "@material-ui/core"
import useStyles from "./styles"

const CurentlyOffering = () => {

    const classes = useStyles();
    return(
    <>

    <Box mt={8} display="flex"  alignItems="center">
        <Typography variant="h2" color="secondary">Currently offering</Typography>
    </Box>

    {/* CARDS */}
    <Box mt={5} display="flex" textAlign="center" justifyContent="center">
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

        <Card className={classes.card} elevation={8} >
            <Box p={3}>
                <Typography variant="h4" color="primary">Pet sitting</Typography>
                <Typography variant="subtitle1">From 30 boons</Typography>
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

        <Card className={classes.card} elevation={8} >
            <Box p={3}>
                <Typography variant="h4" color="primary">Painting</Typography>
                <Typography variant="subtitle1">From 50 boons</Typography>
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

        <Card className={classes.card} elevation={8} >
            <Box p={3}>
                <Typography variant="h4" color="primary">Hair Styling</Typography>
                <Typography variant="subtitle1">From 60 boons</Typography>
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
        <Card className={classes.card} elevation={8} >
            <Box p={3}>
                <Typography variant="h4" color="primary">Planting</Typography>
                <Typography variant="subtitle1">From 10 boons</Typography>
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
    </Box>
    </>
    )
}

export default CurentlyOffering;