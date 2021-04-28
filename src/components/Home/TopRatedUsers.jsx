import React from "react";
import {Typography, Box, Card, CardActions, Button, CardMedia} from "@material-ui/core"
import useStyles from "./styles"

const TopRatedUsers = () => {
    const classes = useStyles();
    return(
        <>
        <Box mt={8} display="flex"  alignItems="center">
                    <Typography variant="h2" color="primary">Top Rated Booners</Typography>
                </Box>

                {/* CARDS */}
                <Box mt={5} display="flex" textAlign="center" justifyContent="center">

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">Eniko</Typography>
                            <Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Petsiting</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/200"
                        title="User picture"
                        />
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">Ines</Typography>
                            <Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Music</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/200"
                        title="User picture"
                        />
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">Cindy</Typography>
                            <Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Gaming</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/200"
                        title="User picture"
                        />
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">Aza</Typography>
                            <Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Craft beer</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/200"
                        title="User picture"
                        />
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">John</Typography>
                            <Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Yoga</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Planting</Button>
                            </Box>
                        </Box>
                        <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/200"
                        title="User picture"
                        />
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                </Box>
        </>
    )
}

export default TopRatedUsers;