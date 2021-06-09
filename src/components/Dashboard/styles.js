import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      root:{

      },
      booncard: {
            width: "30%",
            marginTop: "20px",
            marginRight: "20px",
            height: "450px",
            display: "flex",

    backgroundImage:
      "url(https://images.unsplash.com/photo-1513151233558-d860c5398176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    fontWeight: "bold",
            filter: "brightness(90%)",
          },
          searchwrap:{
            display: 'flex'
          }

    
      }));