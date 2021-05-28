import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    width: "100%",
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    height: "75vh",
    overflow: "scroll",
  },
  box: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "45px",
    backgroundColor: "#E4B363",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  ratingCard: {
    background: "hsla(37, 70%, 64%, 1)",
  },
  image: {
    width: "100%",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
  avatarwrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  // taskDetails
  taskimg: {
    height: "200px",
  },
  //offeredboons
  gridinfo: {
    paddingLeft: "1rem",
  },
  tag: {
    color: "black",
  },
}));
