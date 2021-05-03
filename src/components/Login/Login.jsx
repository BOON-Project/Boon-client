import React, { useState, useEffect, useRef } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid,Typography} from "@material-ui/core" 
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import { userLoginAction } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Boon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // to go back
  const history = useHistory();
  // Redux
  const user = useSelector((state) => state.authReducer.user);
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const inputRef = useRef();

  useEffect(() => {
    console.log("WTF?");
    Object.keys(user).length && history.push("/");
  }, [user]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(userLoginAction(formData));
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon className={classes.icon} />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>
          <form onSubmit={submitHandler} className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='userName'
              label='Your username'
              name='userName'
              ref={inputRef}
              autoComplete='username'
              autoFocus
              onChange={changeHandler}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={changeHandler}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/Signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
