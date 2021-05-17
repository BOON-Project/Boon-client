import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from "./styles";
import Footer from "../Footer/Footer";

//styling=>
import {
    Typography,
    Box,
    Container,
    Button,
    TextField,
    InputLabel,
    Select,
    ButtonGroup,

  } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Controller, useForm } from 'react-hook-form';
import { setErrorAction } from '../../store/actions/errorActions';
import { addTask } from '../../helpers/apiCalls';

export default function RequestBoon(props) {
    const classes = useStyles();
     // to go back
   const history = useHistory();
    const dispatch = useDispatch();
    const { handleSubmit, control } = useForm();

    //const user = props.location.state.user;
    const boonee = useSelector((state) => state.userReducer.user);
    //const { firstName, userName, bio, rating, avatar, skills } =
      //props.location.state.user;


      //conditional LINK
      const linkConditional = () => {
        if (boonee) {
          console.log("this");
          return (
            <Link
              to={{
                // pathname: `/RequestBoon/${user._id}`,
                // state: { user },
              }}
            >
              <Button
               component={Link}
               to='/Dashboard'
               href="/Dashboard"
                size="large"
                color="secondary"
                variant="contained"
                className={classes.button}
              >
                Go to Dashboard
              </Button>
            </Link>
          );
        } else {
          return (
            <Button
            component={Link}
            to='/'
            href="/"
              size="large"
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Go to Dashboard
            </Button>
          );
        }
      };



    return (
        <>
      <Box className={classes.main}>
        <Typography variant="h3" color="secondary" className={classes.hero}>
          Request a Boon in Dashboard
        </Typography>
        <form
          className={classes.form}
          noValidate
        //   onSubmit={handleSubmit(onSubmit)}
        >
          {/* SELECT SKILL */}
          <InputLabel htmlFor="skill" className={classes.label}>
            Skill
          </InputLabel>
          <Controller
            name="skill"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Select
                native
                name="skill"
                variant="outlined"
                fullWidth
                id="skill"
                onChange={onChange}
                value={value}
                helperText={error ? error.message : null}
                className={classes.input}
              >

              </Select>
            )}
            rules={{ required: "skill required" }}
          ></Controller>
          {/*DATE*/}
          <InputLabel htmlFor="date" className={classes.label}>
            When?
          </InputLabel>
          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name="date"
                type="date"
                variant="outlined"
                fullWidth
                id="date"
                onChange={onChange}
                value={value}
                helperText={error ? error.message : null}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
              />
            )}
            rules={{ required: "date required" }}
          />
          {/*HOW LONG*/}
          <InputLabel htmlFor="duration" className={classes.label}>
            How long?
          </InputLabel>
          <Controller
            name="duration"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name="duration"
                variant="outlined"
                fullWidth
                id="duration"
                placeholder="3 days"
                onChange={onChange}
                value={value}
                helperText={error ? error.message : null}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
              />
            )}
            rules={{ required: "duration required" }}
          />
          {/*HOW MUCH*/}
          <InputLabel htmlFor="boons" className={classes.label}>
            How much?
          </InputLabel>
          <Controller
            name="boons"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name="boons"
                variant="outlined"
                fullWidt
                type="number"
                id="boons"
                onChange={onChange}
                value={value}
                placeholder="20"
                helperText={error ? error.message : null}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
              />
            )}
            rules={{ required: "price required" }}
          />
          {/* MESSAGE */}
          <InputLabel htmlFor="message" className={classes.label}>
            Message
          </InputLabel>
          <Controller
            name="message"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                multiline
                rows={4}
                name="message"
                variant="outlined"
                fullWidth
                id="message"
                placeholder="Hello! I would love to get this boon from you"
                onChange={onChange}
                value={value}
                helperText={error ? error.message : null}
                maxLenght="400"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
              />
            )}
            rules={{ maxLenght: 400 }}
          />
          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Request Boon
          </Button>

          <Box className={classes.box} textAlign='center' mt={4} >
        <ButtonGroup  variant='contained'>
          <Button
            component={Link}
            to='/'
            size='large'
            color='secondary'
            variant='contained'
            display='flex-end'
            onClick={() => history.goBack()}
            className={classes.button}>
            Go back
          </Button>

          {linkConditional()}

        </ButtonGroup>
      </Box>
        </form>
      </Box>
      <Footer />
      </>
    );
  }

