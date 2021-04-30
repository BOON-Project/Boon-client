import React from "react";
import useStyles from "../styles";
import Nav from "./Nav/Nav";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
//Components
import Home from "./Home/Home";
import UserProfile from "./UserProfile/UserProfile";
import Signup from "./Signup/Signup";
import Login from "../components/Login/Login";
import Error404 from "./Error404";
import EditUser from "../components/EditUser/EditUser";
import User from "./User";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />

        {/* Private Routes =>  */}
        <PrivateRoute exact path="/UserProfile" component={UserProfile} />
        <PrivateRoute path="User" component={User} />
        <PrivateRoute path="EditUser" component={EditUser} />
        {/* Error 404 Route =>  */}
        <Route path="/*" component={Error404} />
      </Switch>
    </>
  );
};

export default App;
