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





    return (
        <>

      <Footer />
      </>
    );
  }

