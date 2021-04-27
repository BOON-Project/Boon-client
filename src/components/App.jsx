import React from "react";
import Nav from "./Nav";
import {Route, Switch} from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import useSelector from 'react-redux'
//Components
import Home from "./Home";
import UserProfile from "./UserProfile";
import Signup from "./Signup";
import Error404 from "./Error404";
import EditUser from "./EditUser";
import User from './User'

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/UserProfile" component={UserProfile} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Error404" component={Error404} />

      {/* Private Routes =>  */}
      <PrivateRoute path="User" component={User} />
      <PrivateRoute path="EditUser" component={EditUser} />

  </Switch>



    </>
  );
};

export default App;
