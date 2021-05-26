import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOfferedTasksAction } from "../../store/actions/tasksActions";

const RequestedBoons = () => {
    const tasks = useSelector(
        (state) => state.tasksReducer.authUserOfferedTasks
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOfferedTasksAction());
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
