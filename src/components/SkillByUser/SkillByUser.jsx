import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  Avatar,
  Grid,
  Container,
  CssBaseline,
  TextField,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

const SkillByUser = () => {
  const users = useSelector((state) => state.usersReducer.usersWithSkill);
  console.log("state", users);

  return (
    <div>
      <h1>Here we need a map for users</h1>
      <div>
        {users &&
          users.map((user) => {
            console.log(user, "here is user");
            return <h2>{user.userName}</h2>;
          })}
      </div>
    </div>
  );
};

export default SkillByUser;
