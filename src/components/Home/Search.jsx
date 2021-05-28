import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Chip,
  Container,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUsersBySkillAction } from "../../store/actions/usersAction";
import { useDispatch } from "react-redux";

const Search = () => {
  const classes = useStyles();
  const skillsData = useSelector((state) => state.skillsReducer);
  const dispatch = useDispatch();

  const { handleSubmit } = useForm();

  const goToSkill = (id) => {
    console.log("plese work", id);
  };

  const handleInputChange = (skillID) => {
    dispatch(getUsersBySkillAction(skillID));
  };

  return (
    <>
      <Container maxWidth="sm" className={classes.searchwrap}>
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

          <Chip
            label="Petsitting"
            variant="outlined"
            color="info"
            variant="outlined"
            className={classes.tag}
          ></Chip>
          <Chip
            label="Coding"
            variant="outlined"
            color="info"
            variant="outlined"
            className={classes.tag}
          ></Chip>
          <Chip
            label="Painting"
            variant="outlined"
            color="info"
            variant="outlined"
            className={classes.tag}
          ></Chip>

          <Chip
            label="Photography"
            variant="outlined"
            color="info"
            variant="outlined"
            className={classes.tag}
          ></Chip>
        </Box>
      </Container>
    </>
  );
};

export default Search;
