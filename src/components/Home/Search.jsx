import React from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Search = () => {
  const skillsData = useSelector((state) => state.skillsReducer);

  const classes = useStyles();
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
        options={skillsData.map((skill) => skill.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="freeSolo"
            margin="normal"
            variant="outlined"
          />
        )}
      />

<<<<<<< HEAD
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
=======
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={skillsData.map((skill) => skill.name)}
            renderInput={(params) => (
            <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
            )}
        />
>>>>>>> 2eef8de5f486ecd0fdf94065cdcbd42961364a35

export default Search;
