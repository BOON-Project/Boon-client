import React,{useState, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
//import {userLoginAction} from '../../store/actions/authAction';
//import {addUserAction} from '../../store/actions/usersAction'

//styling components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import Container from '@material-ui/core/Container';
//end fo styling components

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Boon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const inputRef = useRef();
  //let user to go back
  const history = useHistory();

  //getting user's data and setting our state =>
  const [formData, setFormData] = useState({
    firstName : "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  })

  //fetching our db
  useEffect(()=>{
    //inputRef.current.focus();
  },[]);

  //setting our FormData with user's info =>
  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    //dispatch(addUserAction(formData));
    //dispatch(userLoginAction(formData));
    history.push("/User")
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstName"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={changeHandler}
                ref={inputRef}
                value={formData.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="lastName"
                onChange={changeHandler}
                ref={inputRef}
                value={formData.lastName}
              />
            </Grid>

            {/* second row! */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                autoComplete="userName"
                onChange={changeHandler}
                ref={inputRef}
                value={formData.userName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Birthday"
                type="date"
                variant="outlined"
                required
                fullWidth
                id="birthday"
                label="Birthday"
                autoComplete="Birthday"
                onChange={changeHandler}
                ref={inputRef}
                value={formData.birthday}
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </Grid>

            {/* 3rd row! */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeHandler}
                ref={inputRef}
                value={formData.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={changeHandler}
                ref={inputRef}
                value={formData.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}