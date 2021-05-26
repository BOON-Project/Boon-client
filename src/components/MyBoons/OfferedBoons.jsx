import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOfferedTasksAction } from "../../store/actions/tasksActions";

const RequestedBoons = () => {
    const tasks = useSelector((state) => state.tasksReducer);
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer.user._id);
    useEffect(() => {
        dispatch(getUserOfferedTasksAction());
    }, []);

    return <div></div>;
};

export default RequestedBoons;
