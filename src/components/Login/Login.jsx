import React from "react";
import {
    setTokenInStorage,
    setUserInStorage,
} from "../../helpers/localStorage";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, updateAuthHeader } from "../../helpers/apiCalls";
import {
    hideErrorAction,
    setErrorAction,
} from "../../store/actions/errorActions";
import { loginAction } from "../../store/actions/userActions";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";
import useFullPageLoader from "../hooks/useFullPageLoader";

export default function SignInSide() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { handleSubmit, control } = useForm();

    // to go back
    const history = useHistory();

    // ON FORM SUBMIT
    const onSubmit = async (formData) => {
        showLoader();

        let result = await loginUser(formData);
        // console.log(result);

        // handle error case
        if (result.error) {
            dispatch(setErrorAction(result.error));
            hideLoader();
            return;
        }
        // handle success case
        dispatch(hideErrorAction());
        dispatch(loginAction(result));
        setTokenInStorage(result.token);
        setUserInStorage(result.user);
        updateAuthHeader(result.token);
        history.push("/");
        console.log("====================================");
        console.log(result.token);
        console.log("====================================");
    };

    //loading state
    const [loader, showLoader, hideLoader] = useFullPageLoader();

    //special footer function
    function Copyright() {
        return (
            <Typography variant='body2' color='textSecondary' align='center'>
                {"Copyright © "}
                <Link color='inherit' href='/'>
                    Boon
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }

    return (
        <>
            <ErrorDisplay />
            <Grid container component='main' className={classes.root}>
                {/* IMAGE COMPONENT */}
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                {/* LOGIN TITLE AND ICON */}
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon className={classes.icon} />
                        </Avatar>
                        <Typography component='h1' variant='h5'>
                            Log in
                        </Typography>

                        {/* FORM */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={classes.form}>
                            {loader}
                            {/* NAME INPUT */}
                            <Controller
                                name='userName'
                                control={control}
                                defaultValue=''
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                        label='Your username'
                                        variant='outlined'
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={
                                            error ? error.message : null
                                        }
                                        margin='normal'
                                        fullWidth
                                        id='userName'
                                        autoComplete='username'
                                        autoFocus
                                    />
                                )}
                                rules={{ required: "First name required" }}
                            />

                            {/* PASSWORD INPUT */}
                            <Controller
                                name='password'
                                control={control}
                                defaultValue=''
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
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
                                        helperText={
                                            error ? error.message : null
                                        }
                                    />
                                )}
                                rules={{ required: "Password required" }}
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value='remember'
                                        color='primary'
                                    />
                                }
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
        </>
    );
}
