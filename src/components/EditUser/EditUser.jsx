import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Input,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useForm, Controller } from "react-hook-form";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import avatarDefault from "./BoonAvatar.svg";
import { useHistory } from "react-router";

const EditUser = () => {
  const user = useSelector((state) => state.userReducer.user);
  const rating = useSelector((state) => state.userReducer.user.rating);
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
    <CssBaseline>
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
              <Grid item xs={12} sm={6}>
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
                <List className={classes.skills}>
                  {" "}
                  <ListItem alignItems='flex-start'>
                    {" "}
                    <Typography variant='h4' color='secondary'>
                      {" "}
                      Current rating:{" "}
                    </Typography>{" "}
                    <ListItemSecondaryAction>
                      <Rating
                        name='size-large'
                        defaultValue={rating}
                        size='large'
                        precision={0.5}
                        readOnly
                      />
                    </ListItemSecondaryAction>
                  </ListItem>{" "}
                  <ListItem alignItems='flex-start'>
                    {" "}
                    <Typography variant='h5' color='primary'>
                      {" "}
                      Skills offered:{" "}
                    </Typography>{" "}
                    <ListItemSecondaryAction>
                      {" "}
                      {/* <AddIcon color='primary' />{" "}
                      <MoreHorizIcon color='primary' />{" "} */}
                    </ListItemSecondaryAction>{" "}
                  </ListItem>{" "}
                  <ListItem alignItems='flex-start'>
                    {" "}
                    <Typography variant='h6' color='primary'>
                      {" "}
                      Add up to 5 skills{" "}
                    </Typography>{" "}
                  </ListItem>{" "}
                  <ListItem alignItems='flex-start'>
                    {" "}
                    <Button size='large' color='primary' variant='outlined'>
                      {" "}
                      Skill
                    </Button>
                    <ListItemSecondaryAction>
                      {" "}
                      <ListItemText primary={`50 boons per hour`} />{" "}
                    </ListItemSecondaryAction>{" "}
                  </ListItem>{" "}
                </List>
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
              <div>
                <input
                  className={classes.input}
                  accept='image/*'
                  display='none'
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
    </CssBaseline>
  );
};

export default EditUser;
