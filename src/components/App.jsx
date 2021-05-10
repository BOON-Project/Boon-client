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
};

export default App;
