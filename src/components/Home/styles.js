
import { makeStyles } from "@material-ui/core";
import Image from "../../images/romain-vignes-ywqa9IZB-dU-unsplash.jpg";

export default makeStyles((theme) => ({
  root: {
    marginTop: "0%",

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

  //** ******************TOP IMAGES SLIDES**************************** */
hero:{
  marginTop: '0'

},

  hero1: {
    height: "500px",
    backgroundImage: "url(https://images.unsplash.com/photo-1620841713108-18ad2b52d15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
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
  hero2: {
    backgroundImage: "url(https://images.unsplash.com/photo-1580709839515-54b8991e2813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80)",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fdffa7",
    fontSize: "4rem",
    fontWeight: "bold",
    backgroundPositionY: 'center'
  },
  hero3: {
    backgroundImage: "url(https://images.unsplash.com/photo-1541944743827-e04aa6427c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80)",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#feffe1",
    fontSize: "4rem",
    fontWeight: "bold",
    backgroundPositionY: 'center'
  },
  hero4: {
    backgroundImage: "url(https://images.unsplash.com/photo-1518542698889-ca82262f08d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80)",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#bb0058",
    fontSize: "4rem",
    fontWeight: "bold",
    backgroundPositionY: 'center'
  },
  hero5: {
    backgroundImage: "url(https://images.unsplash.com/photo-1521732670659-b8c918da61dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#9100e2",
    fontSize: "4rem",
    fontWeight: "bold",
    backgroundPositionY: 'center'
  },

}));
