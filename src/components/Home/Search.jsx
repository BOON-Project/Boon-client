import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  CardActions,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUsersBySkillAction } from "../../store/actions/usersAction";
import { useDispatch } from "react-redux";

const Search = () => {
  const skillsData = useSelector((state) => state.skillsReducer);

  const { handleSubmit } = useForm();
  const goToSkill = (id) => {
    console.log("plese work", id);
  };

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleInputChange = (skillID) => {
    dispatch(getUsersBySkillAction(skillID));
  };

  return (
    <>
      <Box pt="2rem">
        <Typography variant="h6" color="info">
          {" "}
          Explore our tags and search for what you need{" "}
        </Typography>
      </Box>

      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={skillsData}
        getOptionLabel={(skill) => skill.name}
        onChange={(event, skill) => {
          skill && handleInputChange(skill._id);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="freeSolo"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <Box display="flex">
        <Typography>
          <p>Try with: </p>
        </Typography>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.tag}
        >
          Petsiting
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.tag}
        >
          Bricolage
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.tag}
        >
          Painting
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.tag}
        >
          Massage
        </Button>
      </Box>
    </>
  );
};

export default Search;
