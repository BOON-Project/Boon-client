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
    height: "78vh",
    overflow: "scroll",
  },
  paperTaskDetails: {
    width: "100%",
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    height: "75vh",
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
    // background: "hsla(37, 70%, 64%, 1)",
  },
  image: {
    width: "80%",
    height: "80%",
    border: "4px solid #329282",
    borderRadius: "10px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    border: "4px solid #329282",
  },
  avatarwrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  // taskDetails
  taskimg: {
    height: "150px",
    width: "250px",
    borderRadius: "20%",
    border: "5px solid #329282",
    opacity: "0.9",
  },
  //offeredboons
  gridinfo: {
    paddingLeft: "1rem",
  },
  tag: {
    color: "black",
  },
  boxImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  messageFormBox: {
    position: "relative",
    height: "2rem",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 230,
    right: -10,
    width: "70%",
  },

  input: {
    marginBottom: "20px",
    height: "100%",
  },
  submit: {
    height: "100%",
    maxWidth: "6rem",
  },
  buttonBox1: {
    display: "flex",
    position: "relative",
    width: "100%",
    marginBottom: "5px",
  },
  button: {},
}));
