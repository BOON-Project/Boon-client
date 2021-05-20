import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    // "& .MuiGrid-item": {
    //   padding: 0,
    // },
  },

  contact: {
    backgroundColor: "#E4B363",

    //height: "400px",
  },
  wrapper: {
    width: "auto",
    display: "flex",
    backgroundColor: "#E4B363",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "380px",
  },
  video: {
    height: "380px",
  },
}));
