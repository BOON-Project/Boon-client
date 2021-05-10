import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import avatarDefault from "./BoonAvatar.svg";
import { useHistory } from "react-router";

const EditUser = () => {
  const user = useSelector((state) => state.userReducer.user);
  const classes = useStyles();
  const [avatarPreview, setAvatarPreview] = useState(avatarDefault);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onAvatarChange = (e) => {
    let fileSelected = e.target.files[0]; // grab selected file

    if (!fileSelected) return;

    let fileReader = new FileReader();
    fileReader.readAsDataURL(fileSelected); // concert to base64 encoded string
    // wait until file is fully loaded / converted to base64
    fileReader.onloadend = (ev) => {
      console.log(fileReader.result);
      // load base64 into preview img tag
      setAvatarPreview(fileReader.result);
    };
  };

  const onSubmit = async (jsonData) => {
    // merge avatar file with data
    jsonData.avatar = avatarPreview;

    console.log(jsonData);

    // signup user in backend
    try {
      let response = await axios.post("http://localhost:5000/user", jsonData);
      console.log("Response: ", response.data); // => signed up user
    } catch (errAxios) {
      // handle error
      console.log(errAxios.response && errAxios.response.data);
    }
  };

  return (
    <>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' color='primary' variant='h3' mt='2'>
            My Booner Profile
          </Typography>

          {/* form */}
          <form
            className={classes.form}
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}>
            {/* first name input! */}
            <Grid container spacing={2}>
              <Grid item tem xs={12} sm={12}>
                <label htmlFor='avatar'>
                  <img
                    width='150'
                    src={avatarPreview}
                    alt='avatar'
                    label='image'
                  />
                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='firstName'
                  control={control}
                  defaultValue={user.firstName}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      autoComplete='firstName'
                      name='firstName'
                      fullWidth
                      id='firstName'
                      label='First Name'
                      autoFocus
                      onChange={onChange}
                      error={!!error}
                      value={value}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>

              {/* last name input!  */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name='lastName'
                  control={control}
                  defaultValue={user.lastName}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label='Last Name'
                      autoComplete='lastName'
                      name='lastName'
                      fullWidth
                      id='lastName'
                      onChange={onChange}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>

              {/* second row! */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name='userName'
                  control={control}
                  defaultValue={user.userName}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      autoComplete='userName'
                      name='userName'
                      fullWidth
                      id='userName'
                      label='Username'
                      onChange={onChange}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='birthday'
                  control={control}
                  defaultValue={user.birthday}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      name='birthday'
                      type='date'
                      fullWidth
                      id='birthday'
                      label='Birthday'
                      autoComplete='Birthday'
                      onChange={onChange}
                      value={value}
                      helperText={error ? error.message : null}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>

              {/* 3rd row! */}
              <Grid item xs={12}>
                <Controller
                  name='email'
                  control={control}
                  defaultValue={user.email}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                      onChange={onChange}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>

              {/* 4th row! */}

              <Grid item xs={12}>
                <Controller
                  name='bio'
                  control={control}
                  defaultValue={user.bio}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => <Paper className={classes.paper}>{user.bio}</Paper>}
                />
              </Grid>
              <div className={classes.input}>
                <input
                  accept='image/*'
                  type='file'
                  id='avatar'
                  name='avatar'
                  onChange={onAvatarChange}
                />
              </div>
              <Button variant='outlined'>Save changes</Button>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default EditUser;
