import React from "react";
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
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { EditUserAction } from "../../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";

const EditUser = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <CssBaseline>
      <h1>Hello</h1>
    </CssBaseline>
  );
};

export default EditUser;
