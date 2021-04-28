import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#32908F",
    },
    secondary: {
      main: "#E4B363",
    },
    info: {
      main: "#313638",
    },
    success: {
      main: "#E8E9EB",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline/>
      <App />
    </React.Fragment>
    </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
