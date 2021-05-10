import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Search = () => {
  const skillsData = useSelector((state) => state.skillsReducer);
  const users = useSelector((state) => state.usersReducer);

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
          <CardActions style={{ padding: "0" }}>
            <Link
              to={{
                pathname: `/SkillByUser/${skill._id}`,
                state: { skill },
              }}
            >
              <TextField
                {...params}
                label="freeSolo"
                margin="normal"
                variant="outlined"
              />
            </Link>
          </CardActions>
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
