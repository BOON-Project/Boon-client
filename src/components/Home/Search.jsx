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

const Search = () => {
  const skillsData = useSelector((state) => state.skillsReducer);
  //const users = useSelector((state) => state.usersReducer);
  //1. wrap the search with form
  //2. attach the formSubmit event to a function -> http request to the endpoint /skill/id
  //3. get/post request
  //4. setup the endpoint "route" to retrieve data from the DB according to the id in the req.body/params
  //5. saving retrieved data to redux store
  //6. select the data and render on view
  const { handleSubmit } = useForm();
  const goToSkill = (id) => {
    console.log("plese work", id);
  };

  const classes = useStyles();
  const history = useHistory();

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
          history.push(`/skills/${skill._id}`);
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
