import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component, redirectTo = "/login" }) => {
  // const [isAuth, setIsAuth] = useState(false);
  const user = useSelector((state) => state.authReducer.user);
  // useEffect(() => {
  //   if  setIsAuth(true);
  // }, []);

  // grab the info if user is logged in from context

  // in case we are logged in => allow passing the given route
  // in case we are NOT logged in => redirect that fu**** not known person to login
  return Object.keys(user).length ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to={redirectTo} />
  );
};

export default PrivateRoute;
