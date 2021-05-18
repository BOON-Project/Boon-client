import { useStyles } from "./styles";
import { makeStyles } from "@material-ui/core";
import Image from "../../images/romain-vignes-ywqa9IZB-dU-unsplash.jpg";

export default makeStyles((theme) => ({
  root: {
    marginTop: "5%",

    //media queries mobile version
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
      currentlyCard: {
        maxWidth: "500px",
        minWidth: "400px",
        backgroundColor: "red",
      },
      avatar: {
        height: "10px",
        width: "5px",
      },
    },

    //media queries tablet
    [theme.breakpoints.up("md")]: {
      backgroundColor: "none",
    },
    //media queries pcs
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "none",
    },
  },
  card: {
    width: "300px",
    marginTop: "20px",
    marginRight: "20px",
    height: "400px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  userCard: {
    padding: 0,
    margin: 0,
    marginRight: "20px",
    textAlign: "center",
  },

  ratingCard: {
    minHeight: "330px",
  },

  circle: {
    marginLeft: "0px",
  },
  button: {
    width: "100%",
    backgroundColor: "#E4B363",
    border: "none",
    padding: "10px",
  },
  tag: {
    margin: "5px 5px 5px 0",
  },
  media: {
    height: "150px",
    width: "150px",
    right: "-50px",
  },
  avatar: {
    width: "80px",
    height: "80px",
  },
  avatarBooners: {
    width: "150px",
    height: "150px",
  },
  miniavatar: {
    right: "-65px",
    height: theme.spacing(7),
    width: theme.spacing(7),
  },
  appBar: {
    backgroundColor: `${theme.primary}`,
    color: "white",
  },
  hero: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "4rem",
    fontWeight: "bold",
  },
  more: {
    padding: "10px",
  },
  booncard: {
    width: "100%",
    marginTop: "20px",
    marginRight: "20px",
    height: "250px",
    display: "flex",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Image})`,
    color: "white",
    filter: "brightness(90%)",
  },
  currentlyCard: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      currentlyCard: {

      },
      media: {
        height: "10px",
        width: "5px",
      },
    },
    width: "300px",
    marginTop: "20px",
    marginRight: "20px",
    height: "400px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  cardBox: {},
}));
