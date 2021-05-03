import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
        hero: {
          marginLeft: 30,
          marginTop: 10,
          marginBottom: 10,
        },
        skills: {
          width: "100%",
          maxWidth: 450,
        },
        container: {
          marginLeft: 50,
          marginRight: 50,
          marginTop: 20,
        },
        image: {
          width: 400,
          height: 250,
          marginRight: 50,
          marginTop: 25,
        },
        root: {
          margin: 50,
          flexGrow: 1,
        },
        '& input:valid + fieldset': {
          width: 500,
          marginBottom: 10,
        },
        icon: {
          fontSize: 15,
        },
      }));