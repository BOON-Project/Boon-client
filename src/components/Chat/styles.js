import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  root: {
//overflow: 'scroll ',

  },
  flex:{
    display: 'flex',
    alignItems: 'center',

  },
  flexReverse:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',

  },
  topicsWindow: {

  },
  chatWindow: {

    width: '100%',
    height: '250px',
    padding:'20px',
    overflowY:'scroll'
  },
  chatBox: {
    width: '85%',
  },
  button: {
    width: '15%',
  },
  textField:{

  },
  flexInput:{
    display: 'flex',
    alignItems: 'center',

  },
}));
