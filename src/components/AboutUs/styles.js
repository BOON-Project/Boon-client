import { makeStyles } from "@material-ui/core/styles";
import team from "../../images/people-discussion-5069845_1920.jpg";
import berlin from "../../images/architecture-3171308_1920.jpg";
import dog from "../../images/woman-6197737_1920.jpg";
import guitar from "../../images/guitar-5531027_1920.jpg";
import friends from "../../images/friends-581753_1920.jpg";
import cindy from "../../images/cindy.jpg";
import eniko from "../../images/eniko.jpg";

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
    backgroundImage: `url(${friends})`,
    height: "300px",
  },
  media1: {
    backgroundImage: `url(${guitar})`,
    height: "300px",
  },
  media2: {
    height: "300px",
  },
  hero: {
    marginTop: "50px",
    backgroundImage: `url(${berlin})`,
    height: "400px",
    width: "100%s",
  },
}));
