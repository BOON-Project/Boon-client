import { Box } from "@material-ui/core";
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
    console.log("====================================");
    console.log(tasks);
    console.log("====================================");
    return (
        <>
            {/* {tasks.map((task) => (
                <Box key={task._id} style={{ border: "1px solid" }}>
                    <span>{task.status}</span>
                    <br />
                    <span>{task.boonee.userName}</span>
                    <br />
                    <span>{task.skill.name}</span>
                    <br />
                    <span>{task.boons}</span>
                    <br />
                    <span>{task.message}</span>
                    <br />
                </Box>
            ))} */}
        </>
    );
};

export default RequestedBoons;
