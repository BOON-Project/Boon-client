import React from "react";
import "../styles/index.css";
import { Route, Switch } from "react-router-dom";
//Components
import Nav from "./Nav/Nav";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home/Home";
import UserProfile from "./UserProfile/UserProfile";
import EditUser from "./EditUser/EditUser";
import Signup from "./Signup/Signup";
import SkillByUser from "./SkillByUser/SkillByUser";
import Login from "../components/Login/Login";
import Error404 from "./Error404";
import RequestBoon from "./RequestBoon/RequestBoon";
import Dashboard from "./Dashboard/Dashboard";
import AboutUs from "./AboutUs/AboutUs";
import TopCarousel from "./Home/TopCarousel";
import Contact from "./Contact/Contact";

import MyBoons from "./MyBoons/MyBoons";
import Test from "./Test/Test";
import TaskDetails from "./MyBoons/TaskDetails";
const App = () => {
    return (
        <>
            <Nav />
            <Switch>
                {/* new files structure */}
                <Route exact path='/' component={Home} />
                <Route exact path='/Signup' component={Signup} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/UserProfile/:id' component={UserProfile} />
                <PrivateRoute exact path='/RequestBoon/:id' component={RequestBoon} />
                <Route exact path='/skill/:id' component={SkillByUser} />
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/Contact' component={Contact} />
                {/* <Route exact path='/test' component={Test} /> */}
                <Route exact path='/TopCarousel' component={TopCarousel} />
                <Route exact path='/TopCarousel' component={TopCarousel} />

                {/* PRIVATE ROUTES */}

                {/* where ppl can see Boonees by skill (what ppl need) */}
                <PrivateRoute exact path='/Dashboard' component={Dashboard} />

                {/* where user can change personal info */}
                <PrivateRoute path='/EditUser' component={EditUser} />

                {/* MAIN CORE OF THE PROJECT  - USER CAN CHECK TASKS*/}
                <PrivateRoute
                    exact
                    path='/MyBoons/:id'
                    component={TaskDetails}
                />
                <PrivateRoute exact path='/MyBoons' component={MyBoons} />

                {/* Error 404 Route =>  */}
                <Route path='/*' component={Error404} />
            </Switch>
        </>
    );
};

export default App;
