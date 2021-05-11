import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupAction } from "../../store/actions/userActions";
import { signupUser } from "../../helpers/apiCalls";

//styling components
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import {
  hideErrorAction,
  setErrorAction,
} from "../../store/actions/errorActions";
import {
  setTokenInStorage,
  setUserInStorage,
} from "../../helpers/localStorage";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";

//end fo styling components

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Boon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
//hook-form

export default function SignUp() {
  //general calling functions !
  const classes = useStyles();
  const dispatch = useDispatch();

  //let user to go back
  const history = useHistory();

  //form!
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    let result = await signupUser(data);

    // handle error case
    if (result.error) {
      dispatch(setErrorAction(result.error));
      return;
    }

    // handle success case
    dispatch(hideErrorAction());
    dispatch(signupAction(data));
    setTokenInStorage(result.token);
    setUserInStorage(result.user);
    history.push("/");
  };

  return (
    <>
      <ErrorDisplay />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {/* form */}
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* first name input! */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      autoComplete="firstName"
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={onChange}
                      error={!!error}
                      value={value}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "First Name required" }}
                />
              </Grid>

              {/* last name input!  */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      autoComplete="lastName"
                      name="lastName"
                      fullWidth
                      id="lastName"
                      onChange={onChange}
                      value={value}
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
                  name="userName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      autoComplete="userName"
                      name="userName"
                      variant="outlined"
                      fullWidth
                      id="userName"
                      label="Username"
                      onChange={onChange}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "Username required" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="birthday"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      name="birthday"
                      type="date"
                      variant="outlined"
                      fullWidth
                      id="birthday"
                      label="Birthday"
                      autoComplete="Birthday"
                      onChange={onChange}
                      value={value}
                      helperText={error ? error.message : null}
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
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={onChange}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "Email required" }}
                />
              </Grid>

              {/* 4th row! */}
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      name="password"
                      variant="outlined"
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={onChange}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "password required" }}
                />
              </Grid>

              {/* NEWSLETTER */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
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
            >
              Sign Up
            </Button>

            {/* LOGIN */}
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

        {/* COPYRIGHT */}
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
