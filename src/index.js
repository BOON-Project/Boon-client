import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export let theme = createMuiTheme({
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
    error: {
      main: "#ef5350",
    },
    background: {
      default: "#E8E9EB",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>

          <CssBaseline />
          <App />

      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
