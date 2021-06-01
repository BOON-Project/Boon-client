import { makeStyles } from "@material-ui/core/styles";
import berlin from "../../images/architecture-3171308_1920.jpg";

export default makeStyles((theme) => ({
  main: {
    width: "60%",
    margin: "5% auto",
  },
  form: {
    width: "100%",
    marginTop: "3%",
  },
  label: {
    fontSize: "20px",
  },
  input: {
    marginBottom: "20px",
  },
  media: {
    height: "300px",
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  },
  avatar: {
    width: "200px",
    height: "200px",
  },

  hero: {
    marginTop: "50px",
    backgroundImage: `url(${berlin})`,
    height: "400px",
    width: "100%",
  },
  lastCard: {
    display: "flex",

    backgroundImage: `url(https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80)`,
    height: "500px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    marginBottom: "1rem",
  },
  insideText: {
    padding: theme.spacing(3, 2),
    height: 465,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icons: {
    justifyContent: "center",
  },
  icon: {
    fontSize: "4rem",
    color: "white",
  },
}));
