import React from "react";
import useStyles from "../styles";
import Nav from "./Nav/Nav";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
//Components
import Home from "./Home/Home";
import UserProfile from "./UserProfile/UserProfile";
import EditUser from "./EditUser/EditUser";
import Signup from "./Signup/Signup";
import SkillByUser from "./SkillByUser/SkillByUser";
import Login from "../components/Login/Login";
import Error404 from "./Error404";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        {/* new files structure */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/UserProfile/:id" component={UserProfile} />
        <Route excat path="/skills" component={SkillByUser} />
        {/* Private Routes =>  */}
        <PrivateRoute path="/EditUser" component={EditUser} />
        {/* Error 404 Route =>  */}
        <Route path="/*" component={Error404} />
      </Switch>
    </>
  );
};

export default App;
