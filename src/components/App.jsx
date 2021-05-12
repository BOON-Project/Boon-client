import React from "react";
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
import RequestBoon from "./RequestBoon/RequestBoon";

const App = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 98a4d8a03f9957f91ab2eeab17ffb39d8d6db92c
  return (
    <>
      <Nav />
      <Switch>
        {/* new files structure */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/UserProfile/:id" component={UserProfile} />
<<<<<<< HEAD
        <Route exact path="/skills" component={SkillByUser} />
=======
        <Route exact path="/RequestBoon/:id" component={RequestBoon} />
        <Route exact path="/skill/:id" component={SkillByUser} />
>>>>>>> 98a4d8a03f9957f91ab2eeab17ffb39d8d6db92c
        {/* Private Routes =>  */}
        <PrivateRoute path="/EditUser" component={EditUser} />
        {/* Error 404 Route =>  */}
        <Route path="/*" component={Error404} />
      </Switch>
    </>
  );
<<<<<<< HEAD
=======
	return (
		<>
			<Nav />
			<Switch>
				{/* new files structure */}
				<Route exact path="/" component={Home} />
				<Route exact path="/Signup" component={Signup} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/UserProfile/:id" component={UserProfile} />
				<Route exact path="/RequestBoon/:id" component={RequestBoon} />
				{/* Private Routes =>  */}
				<PrivateRoute path="/EditUser" component={EditUser} />
				{/* Error 404 Route =>  */}
				<Route path="/*" component={Error404} />
			</Switch>
		</>
	);
>>>>>>> 1cb3f43c88cab848e2b48c5a2026fdc89853a759
=======
>>>>>>> 98a4d8a03f9957f91ab2eeab17ffb39d8d6db92c
};

export default App;
