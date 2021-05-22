import React from "react";
import useStyles from "./styles";
//styling=>
import {
    Avatar,
    Typography,
    Box,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    IconButton,
    CardMedia,
    CardContent,
    Paper,
    Link,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
//pictures for the page
import team from "../../images/people-discussion-5069845_1920.jpg";
import berlin from "../../images/architecture-3171308_1920.jpg";
import dog from "../../images/woman-6197737_1920.jpg";
import guitar from "../../images/guitar-5531027_1920.jpg";
import friends from "../../images/friends-581753_1920.jpg";
import cindy from "../../images/cindy.jpg";
import eniko from "../../images/eniko.jpg";
import aza from "../../images/aza.jpg";
import Footer from "../Footer/Footer";

export default function AboutUs() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Container maxWidth='lg' className={classes.root}>
                {/* Title */}
                <Grid container spacing={3}>
                    <Box
                        item
                        xs={12}
                        className={classes.hero}
                        component={Grid}
                        boxShadow={8}>
                        <Grid item xs={5}>
                            <Typography
                                variant='h1'
                                color='primary'
                                style={{ fontWeight: 600 }}>
                                The vision behind boon
                            </Typography>
                        </Grid>
                    </Box>

                    <Grid item xs={12}>
                        <Box mt={3} mb={5}>
                            <Typography variant='h6'>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsam non excepturi unde
                                deleniti, enim facere accusamus rerum qui
                                architecto doloremque ratione? Quod nam voluptas
                                aperiam nesciunt cupiditate enim libero
                                explicabo quam expedita molestiae, harum, non
                                odio dolorem, labore placeat optio? Velit
                                temporibus, modi earum consequatur itaque aut
                                rerum necessitatibus eius ducimus, repellendus
                                quidem quas voluptate eaque! Impedit molestias
                                animi rem?
                            </Typography>
                        </Box>
                        <Typography variant='h2' color='primary'>
                            Our Values
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={friends}
                                    title='Contemplative Reptile'
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='h2'>
                                        Community
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Sunt, sapiente
                                        explicabo? Cupiditate deleniti et, iusto
                                        voluptas animi sint praesentium qui.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={guitar}
                                    title='Contemplative Reptile'
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='h2'>
                                        Berlin
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sed nulla magni cum
                                        exercitationem veniam nisi et ipsam
                                        officia adipisci labore, laboriosam
                                        eveniet quibusdam animi incidunt
                                        necessitatibus.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={dog}
                                    title='Contemplative Reptile'
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='h2'>
                                        Connection
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repudiandae, nemo
                                        alias accusantium quas eum doloribus
                                        similique non natus delectus animi
                                        cumque quam ea quos voluptates
                                        obcaecati.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                {/* Team component */}
                <Box className={classes.box} mt={3} mb={4}>
                    <Typography variant='h2' color='primary'>
                        Meet the team
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea className={classes.intro}>
                                <Avatar
                                    className={classes.avatar}
                                    src={cindy}
                                    title='Cindy'
                                />
                                <CardContent>
                                    <Typography
                                        align='center'
                                        variant='h5'
                                        component='h2'>
                                        Cindy
                                    </Typography>{" "}
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Sunt, sapiente
                                        explicabo? Cupiditate deleniti et, iusto
                                        voluptas animi sint praesentium qui.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions disableSpacing>
                                <Link
                                    a
                                    href='https://github.com/mizzrawr'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='add to favorites'>
                                        <GitHubIcon />
                                    </IconButton>
                                </Link>
                                <Link
                                    a
                                    href='https://www.linkedin.com/in/cindy-giron/'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='share'>
                                        <LinkedInIcon />
                                    </IconButton>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea className={classes.intro}>
                                <Avatar
                                    className={classes.avatar}
                                    src={aza}
                                    title='Azael'
                                />
                                <CardContent>
                                    <Typography
                                        align='center'
                                        variant='h5'
                                        component='h2'>
                                        Azael
                                    </Typography>{" "}
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Sunt, sapiente
                                        explicabo? Cupiditate deleniti et, iusto
                                        voluptas animi sint praesentium qui.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions disableSpacing>
                                <Link
                                    a
                                    href='https://github.com/Zarzarius'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='add to favorites'>
                                        <GitHubIcon />
                                    </IconButton>
                                </Link>
                                <Link
                                    a
                                    href='https://www.linkedin.com/in/azael-alonso-campana-5b1a49207/'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='share'>
                                        <LinkedInIcon />
                                    </IconButton>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea className={classes.intro}>
                                <Avatar
                                    className={classes.avatar}
                                    src={eniko}
                                    title='Enikö'
                                />
                                <CardContent>
                                    <Typography
                                        align='center'
                                        variant='h5'
                                        component='h2'>
                                        Enikö
                                    </Typography>{" "}
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Sunt, sapiente
                                        explicabo? Cupiditate deleniti et, iusto
                                        voluptas animi sint praesentium qui.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                                <Link
                                    a
                                    href='https://github.com/encsooo'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='add to favorites'>
                                        <GitHubIcon />
                                    </IconButton>
                                </Link>
                                <Link
                                    a
                                    href='https://www.linkedin.com/in/enikoveszelka/'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='share'>
                                        <LinkedInIcon />
                                    </IconButton>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                {/* 3rd component  */}

                {/* sensual title */}
                <Box className={classes.box} mt={6} mb={4}>
                    <Typography variant='h2' color='primary'>
                        Join us!
                    </Typography>
                </Box>

                {/* start of  big card  */}
                <Grid mb={3} container direction='column'>
                    <Card className={classes.lastCard} elevation={8}>
                        <Box className={classes.insideText}>
                            {/* First sentence */}
                            <Typography
                                align='center'
                                variant='h2'
                                component='h2'
                                style={{ color: "white", fontWeight: 600 }}>
                                Are you ready to catch 'em all ?
                            </Typography>{" "}
                            {/* second sentence */}
                            <Typography
                                align='center'
                                variant='h5'
                                style={{ color: "white", fontWeight: 500 }}>
                                Stay tuned to get our latest job offers
                            </Typography>
                            {/* stupid and sensual icons  */}
                            <CardActions
                                className={classes.icons}
                                disableSpacing>
                                {/* First first icon */}
                                <Link
                                    a
                                    href='https://github.com/BOON-Project'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='add to favorites'>
                                        <GitHubIcon className={classes.icon} />
                                    </IconButton>
                                </Link>

                                {/* second icon */}
                                <Link
                                    a
                                    href='https://linkedin.com'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='share'>
                                        <LinkedInIcon
                                            className={classes.icon}
                                        />
                                    </IconButton>
                                </Link>

                                {/* last but not least icon */}
                                <Link
                                    a
                                    href='https://twitter.com'
                                    target='_blank'
                                    rel='noopener'>
                                    <IconButton aria-label='share'>
                                        <TwitterIcon className={classes.icon} />
                                    </IconButton>
                                </Link>

                                {/* end of stupid icons */}
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}
