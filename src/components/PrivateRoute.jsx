import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component, redirectTo = "/login" }) => {
    const user = useSelector((state) => state.userReducer.user);

    // grab the info if user is logged in from context

    return user ? (
        <Route path={path} component={component} />
    ) : (
        <Redirect to={redirectTo} />
    );
};

export default PrivateRoute;
