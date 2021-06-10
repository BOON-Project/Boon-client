import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "26ch",
    },
    // "& .MuiGrid-item": {
    //   padding: 0,
    // },
  },

  contact: {
    marginTop: "1px",
    backgroundColor: "#E4B363",

    //height: "400px",
  },
  wrapper: {
    width: "auto",
    display: "flex",
    backgroundColor: "#E4B363",
    flexDirection: "column",
    alignItems: "center",

    height: "90vh",
  },
  videoWrap: {},
  video: {
    height: "380px",
  },
  button: {
    marginTop: "15px",
  },
  boonz:{
    color: '#E4B363'
  }
}));
