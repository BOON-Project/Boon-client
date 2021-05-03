import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Paper,
  Divider,
  Container,
  CssBaseline,
  Grid,
  Button,
} from "@material-ui/core";

import { editUserAction } from "../../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";

const EditUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let filteredFields = {};
    console.log(filteredFields);
    Object.keys(formData).forEach((key) => {
      if (formData[key].length > 0) {
        filteredFields[key] = formData[key];
      }
    });
    dispatch(editUserAction(filteredFields));
  };

  return (
    <CssBaseline>
      <input
        className="input"
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder={user.firstName}
        required
        onChange={changeHandler}
        ref={inputRef}
      />
      <button onClick={submitHandler}>Save</button>
    </CssBaseline>
  );
};

export default EditUser;
