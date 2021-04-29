import React from "react";
import {Typography, Box, Card, CardActions, Button, CardMedia, Avatar} from "@material-ui/core"
import useStyles from "./styles"

const TopRatedUsers = () => {
    const classes = useStyles();
    return(
        <>
        <Box mt={8} display="flex"  alignItems="center">
                    <Typography variant="h2" color="primary">Top Rated Booners</Typography>
                </Box>

                {/* CARDS */}
                <Box mt={5} display="flex" textAlign="center" justifyContent="center" alignItems="flex-start">

                    <Card className={classes.userCard} elevation={8} >
                    <Box display="flex" flexDirection="column">
                        <Box m={3}>
                            <Typography variant="h4" color="info">Eniko</Typography>
                            <Box m={4} display="flex" justifyContent="center"> 
                                <Avatar alt="Remy Sharp" src="https://picsum.photos/200" className={classes.avatarBooners} />
                            </Box>
                            <Box display="flex" justifyContent="center" flexDirection="column" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Petsiting</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Box>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">Ines</Typography>
                            <Box m={4} display="flex" justifyContent="center"> 
                                <Avatar alt="Remy Sharp" src="https://picsum.photos/200" className={classes.avatarBooners} />
                            </Box>
                            <Box display="flex" justifyContent="center" flexDirection="column" pt={2} >
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Music</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardActions style={{padding:"0"}} alignSelf="flex-end">
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">Cindy</Typography>

                            <Box m={4} display="flex" justifyContent="center" alignContent="center"> 
                                <Avatar alt="Remy Sharp" src="https://picsum.photos/200" className={classes.avatarBooners} />
                            </Box>

                            <Box display="flex" justifyContent="center" flexDirection="column" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Gaming</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">Aza</Typography>

                            <Box m={4} display="flex" justifyContent="center" alignItems="center"> 
                                <Avatar alt="Remy Sharp" src="https://picsum.photos/200"className={classes.avatarBooners} />
                            </Box>
                            
                            <Box display="flex" justifyContent="center" flexDirection="column" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Craft beer</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Coding</Button>
                            </Box>
                        </Box>
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.userCard} elevation={8} >
                        <Box m={3}>
                            <Typography variant="h4" color="info">John</Typography>
                            <Box m={4} display="flex" justifyContent="center"> 
                                <Avatar alt="Remy Sharp" src="https://picsum.photos/200" className={classes.avatarBooners} />
                            </Box>
                            <Box display="flex" justifyContent="center" flexDirection="column" pt={2}>
                                <Button size="medium" color="info" variant="outlined" className={classes.tag}>Yoga</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Planting</Button>
                                <Button size="small" color="info" variant="outlined" className={classes.tag}>Planting</Button>
                            </Box>
                        </Box>
                        <CardActions style={{padding:"0"}}>
                            <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                        </CardActions>
                    </Card>

                </Box>
        </>
    )
}

export default TopRatedUsers;