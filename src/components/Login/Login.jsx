import React, { useState, useEffect, useRef } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid,Typography} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import { useForm, Controller } from "react-hook-form"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../helpers/apiCalls";
import { setErrorAction } from "../../store/actions/errorActions";
import { loginAction } from "../../store/actions/userActions";

export default function SignInSide() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {handleSubmit, control} = useForm();

  // to go back
  const history = useHistory();

  // Redux
  // const user = useSelector((state) => state.authReducer.user);
  const inputRef = useRef();

  // REDIRECT AND FOCUS
/*   useEffect(() => {
    Object.keys(user).length && history.push("/");
    inputRef.current.focus();
  }, [user]); */


  // ON FORM SUBMIT
  const onSubmit = async (formData) => {
      let result = await loginUser(formData)
      console.log(result);
      // handle error case
      if(result.error){
        dispatch(setErrorAction(result))
        return
      }
      // handle success case
      dispatch(setErrorAction({}))
      dispatch(loginAction(result))
  };

  // FUNCTION COPYRIGHT
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

  return (

    <Grid container component='main' className={classes.root}>
      {/* IMAGE COMPONENT */}
      <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />

      {/* LOGIN TITLE AND ICON */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon className={classes.icon} />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >


            {/* NAME INPUT */}
            <Controller 
              name='userName'
              control={control}
              defaultValue=""
              render={({ field:{onChange, value}, fieldState: {error} })=>(
                <TextField
                  label='Your username' 
                  variant='outlined'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error? error.message : null}
                  margin='normal'
                  fullWidth
                  id='userName'
                  autoComplete='username'
                  autoFocus
                />
              )}
              rules={{required: "First name required"}}
            />

            {/* PASSWORD INPUT */}
            <Controller
              name='password'
              control={control}
              defaultValue=""
              render={({ field:{onChange, value}, fieldState: {error} })=>(
                <TextField
                  label='Password'
                  variant='outlined'
                  margin='normal'
                  type='password'
                  fullWidth
                  id='password'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error? error.message : null}
                />
              )}
              rules={{required:"Password required"}}
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
          </form>

            {/* SIGNUP AND FORGOT PASSWORD */}
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

            {/* COPYRIGHT */}
            <Box mt={5}>
              <Copyright />
            </Box>


        </div>
      </Grid>
    </Grid>
  );
}
