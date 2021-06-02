import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  root: {
//overflow: 'scroll ',

  },
  flex:{
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    // width: '15%',
    // height: '300px',
    // border: '1px solid black'
  },
  chatWindow: {

    width: '100%',
    height: '250px',
    padding:'20px',
  },
  chatBox: {
    width: '85%',
  },
  button: {
    width: '15%',
  },
  textField:{

  }
}));
