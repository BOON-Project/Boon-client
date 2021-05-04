import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { userLoginAction } from "../../store/actions/authActions";
import { addUserAction } from "../../store/actions/userActions";

//styling components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";

//end fo styling components

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
//hook-form

export default function SignUp() {
  //form!
  const { register, errors, watch, handleSubmit, control } = useForm();

  //password check
  let password = useRef({});
  password = watch("password", "");

  //general calling functions !
  const classes = useStyles();
  const dispatch = useDispatch();
  const inputRef = useRef();
  //let user to go back
  const history = useHistory();

  //getting user's data and setting our state =>
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    birthday: "",
  });

  //fetching our db
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //setting our FormData with user's info =>
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUserAction(formData));
    //dispatch(userLoginAction(formData));
    history.push("/");
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(submitHandler)}>
          {/* first name input! */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name='firstName'
                control={control}
                defaultValue=''
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete='firstName'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                    onChange={changeHandler}
                    ref={inputRef}
                    value={formData.firstName}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "First Name required" }}
              />
            </Grid>
            {/* last name input!  */}
            <Grid item xs={12} sm={6}>
              <Controller
                name='lastName'
                control={control}
                defaultValue=''
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete='lastName'
                    name='lastName'
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    onChange={changeHandler}
                    value={formData.lastName}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Last Name required" }}
              />
            </Grid>

            {/* second row! */}
            <Grid item xs={12} sm={6}>
              <Controller
                name='userName'
                control={control}
                defaultValue=''
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    autoComplete='userName'
                    name='userName'
                    variant='outlined'
                    required
                    fullWidth
                    id='userName'
                    label='Username'
                    onChange={changeHandler}
                    value={formData.userName}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Username required" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='birthday'
                control={control}
                defaultValue=''
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    name='birthday'
                    type='date'
                    variant='outlined'
                    required
                    fullWidth
                    id='birthday'
                    label='Birthday'
                    autoComplete='Birthday'
                    onChange={changeHandler}
                    value={formData.birthday}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
                rules={{ required: "Birthday required" }}
              />
            </Grid>

            {/* 3rd row! */}
            <Grid item xs={12}>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    onChange={changeHandler}
                    value={formData.email}
                  />
                )}
                rules={{ required: "Email required" }}
              />
            </Grid>

            {/* 4th row! */}
            <Grid item xs={12}>
              <Controller
                name='password'
                control={control}
                defaultValue=''
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    name='password'
                    variant='outlined'
                    required
                    fullWidth
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    onChange={changeHandler}
                    value={formData.password}
                  />
                )}
                rules={{ required: "password required" }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={submitHandler}>
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/login' variant='body2'>
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
