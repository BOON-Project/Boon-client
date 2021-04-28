import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Card,
  CardActions,
  CatdContent,
  CardContent,
  Divider,
  Container,
  CssBaseline,
  Grid,
} from "@material-ui/core";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Typography variant="h3">Eniko</Typography>
      <Divider variant="middle" />
      <Container>
        <div>
          <img src="" alt="" />
        </div>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <LinkedCameraIcon />
            </ListItemAvatar>
            <ListItemText primary={`Photography`} />
            <ListItemSecondaryAction>
              <ListItemText primary={`50 boons`} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Container>
    </CssBaseline>
  );
};

export default UserProfile;
