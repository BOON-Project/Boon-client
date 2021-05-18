import { makeStyles } from "@material-ui/core/styles";
import team from "../../images/people-discussion-5069845_1920.jpg";
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
}));
