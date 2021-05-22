import { Link } from "react-router-dom";
import "../../styles/index.css";
import useStyles from "./styles";
import {
    TextField,
    Box,
    Typography,
    Grid,
    FormControl,
} from "@material-ui/core";
import video from "../../images/contact.mp4";

export default function AboutUs() {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3} className={classes.contact}>
                <Grid item xs={12} md={6} id='no-hecking-padding'>
                    <video
                        autoPlay
                        muted
                        autoplay='1'
                        className={classes.video}>
                        <source src={video} type='video/mp4' />
                        Your device does not support playing 'video/mp4' videos
                    </video>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl
                        className={classes.root}
                        noValidate
                        autoComplete='off'>
                        <Box pt='2rem' className={classes.wrapper}>
                            <Typography variant='h6' color='info'>
                                Do you have any questions?
                            </Typography>
                            <TextField
                                label='Name'
                                id='standard-size-small'
                                placeholder='type your name'
                                size='small'
                            />
                            <TextField
                                label='Email'
                                id='standard-size-small'
                                placeholder='type your email address'
                                size='small'
                            />
                            <TextField
                                label='Subject'
                                id='standard-size-small'
                                placeholder='type the subject'
                                size='small'
                            />
                            <TextField
                                id='outlined-multiline-static'
                                label='Message'
                                multiline
                                rows={4}
                                placeholder='Type your message here'
                                variant='outlined'
                            />
                        </Box>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
}
