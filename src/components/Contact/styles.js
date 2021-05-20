import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  wrapper: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
}));
