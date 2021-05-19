import { Link } from "react-router-dom";
import useStyles from "./styles";
import { TextField, Box, Typography } from "@material-ui/core";

export default function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <Box pt="2rem">
        <Typography variant="h6" color="info">
          Do you have any questions?
        </Typography>
      </Box>
      <TextField
        id="outlined-textarea"
        label="Your name"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      <TextField
        id="outlined-textarea"
        label="Your email"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      <TextField
        id="outlined-textarea"
        label="Subject"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      <TextField
        id="outlined-textarea"
        label="Your message"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
    </>
  );
}
