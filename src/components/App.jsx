import React from "react";
import "../styles/index.css";
import { Redirect, Route, Switch } from "react-router-dom";
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
import { useKonamiCode } from "./SecretCode/useKonamiCode";
import konamiLogo from "./logo.svg";
import logoComponent from "./logoComponent";
import MyBoons from "./MyBoons/MyBoons";
import Test from "./Test/Test";
import TaskDetails from "./MyBoons/TaskDetails";

const App = () => {
    const konami = useKonamiCode();
    const logo = konami ? konamiLogo : null;
    return (
        <>
            <Nav />
            {logo ? <Redirect to='logo' /> : null}
            <Switch>
                <Route path='/logo' component={logoComponent} />
                {/* new files structure */}
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/userProfile/:id' component={UserProfile} />
                <Route exact path='/skill/:id' component={SkillByUser} />
                <Route exact path='/aboutUs' component={AboutUs} />
                <Route exact path='/contact' component={Contact} />
                {/* <Route exact path='/test' component={Test} /> */}
                <Route exact path='/topCarousel' component={TopCarousel} />
                <Route exact path='/topCarousel' component={TopCarousel} />

                {/* PRIVATE ROUTES */}

                {/* where ppl can see Boonees by skill (what ppl need) */}
                <PrivateRoute
                    exact
                    path='/requestBoon/:id'
                    component={RequestBoon}
                />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />

                {/* where user can change personal info */}
                <PrivateRoute path='/editUser' component={EditUser} />

                {/* MAIN CORE OF THE PROJECT  - USER CAN CHECK TASKS*/}
                <PrivateRoute
                    exact
                    path='/myBoons/:id'
                    component={TaskDetails}
                />
                <PrivateRoute exact path='/myBoons' component={MyBoons} />

                {/* Error 404 Route =>  */}
                <Route path='/*' component={Error404} />
            </Switch>
        </>
    );
};

export default App;
