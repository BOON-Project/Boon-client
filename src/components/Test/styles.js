import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  body: {
    overflow: "hidden",
    position: "relativ",
    margin: 0,
    margin: 0,
    tansition: theme.transitions.create({ duration: "1s" }),
  },
  scroll: {
    height: "100vh",
    boxSizing: "border-box",
    //WebkitScrollSnapType: "y mandatory",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
  },

  section: {
    height: "100vh",
    scrollSnapType: "center",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkorchid",
    "&:nth-child(1)": {
      background: "#012345",
    },
    "&:nth-child(2)": {
      background: "#123456",
    },
    "&:nth-child(3)": {
      background: "#234567",
    },
  },
}));
