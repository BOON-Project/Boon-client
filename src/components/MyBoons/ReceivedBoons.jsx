import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserReceivedTasksAction } from "../../store/actions/tasksActions";

const RequestedBoons = () => {
    const tasks = useSelector(
        (state) => state.tasksReducer.authUserReceivedTasks
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserReceivedTasksAction());
    }, []);

    return (
        <>
            {tasks.map((task) => (
                <p>{task._id}</p>
            ))}
        </>
    );
};

export default RequestedBoons;
