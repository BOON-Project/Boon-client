import axios from "axios";
import { loadTokenFromStorage } from "./localStorage";

const token = loadTokenFromStorage(); // load authentication token
token && (axios.defaults.headers.token = token); // attach auth token (if exists) to Axios config
// so it will be sent automatically on all our requests to the API
axios.defaults.baseURL =
    process.env.REACT_APP_API_BASE_URL || `http://localhost:5000`;
console.log("====================================");
console.log(process.env.REACT_APP_API_BASE_URL);
console.log("====================================");

const extractApiError = (errAxios) => {
    return errAxios.response
        ? errAxios.response.data
        : { error: { message: "API not reachable" } };
};

// after login we need to place the new, fresh token in the Axios header
// => the token will then be sent on every request to the backend!
export const updateAuthHeader = (token) => {
    axios.defaults.headers.token = token;
};

// on logout we need to clear the auth token from our request
export const clearAuthHeader = () => {
    delete axios.defaults.headers.token;
};

// GET USERS
export const getUsers = async () => {
    console.log(`im fetching the users`);
    try {
        const response = await axios.get(`/users`);
        return response;
    } catch (err) {
        return extractApiError(err);
    }
};

// GET SKILLS
export const getSkills = async () => {
    console.log(`im fetching the skills`);
    try {
        const response = await axios.get(`/skills`);
        return response;
    } catch (err) {
        return extractApiError(err);
    }
};

// GET TASKS
export const getTasks = async () => {
    console.log(`im fetching the tasks`);
    try {
        const response = await axios.get(`/tasks`);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// ADD TASK
export const addTask = async (formData) => {
    try {
        const response = await axios.post("/tasks", formData);
        console.log(response);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// SIGNUP USER
export const signupUser = async (formData) => {
    try {
        const response = await axios.post("/users", formData);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// LOGIN USER

export const loginUser = async (formData) => {
    try {
        const response = await axios.post("/users/login", formData);

        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// EDIT USER

export const editUser = async (id, data) => {
    try {
        const response = await axios.patch(`/users/${id}`, data);

        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// GET USERS WITH SKILL

export const getUsersBySkill = async (skillId) => {
    //console.log(`im fetching the users with this skills`);
    try {
        const response = await axios.get(`/skills/${skillId}`);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// GET USER`S TASKS

export const getUserOfferedTasks = async () => {
    console.log(`im fetching the offered tasks from the AuthUser `);
    try {
        const response = await axios.get(`/me/offered`);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

export const getUserReceivedTasks = async () => {
    console.log(`im fetching the received tasks from the AuthUser `);
    try {
        const response = await axios.get(`/me/received`);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// GET ONE TASK BY ID

export const getTask = async (taskId) => {
    console.log(taskId);
    try {
        const response = await axios.get(`/tasks/${taskId}`);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

// EDIT TASK

export const editTask = async (id, data) => {
    try {
        const response = await axios.patch(`/tasks/${id}`, data);
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");

        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

//get messages
export const getMessages = async (taskId) => {
    console.log(taskId);
    try {
        const response = await axios.get(`/tasks/${taskId}/messages`);
        return response.data;
    } catch (err) {
        return extractApiError(err);
    }
};

export const addMessages = async (formData, taskId) => {
    console.log("hi Cindy", taskId, formData);
    try {
        const response = await axios.post(
            `/tasks/${taskId}/messages`,
            formData
        );
        return response;
    } catch (err) {
        return extractApiError(err);
    }
};

//add boons to wallet apicall
export const addBoons = async (taskId, data) => {
    console.log("im trying to add boonss", taskId, data);
    try {
        const response = await axios.patch(`/tasks/${taskId}`);
        return response;
    } catch (err) {
        return extractApiError(err);
    }
};

//substract boons to wallet apicall
export const substractBoons = async (taskId, data) => {
    console.log("im trying to substract boonss", taskId, data);
    try {
        const response = await axios.patch(`/tasks/${taskId}`);
        return response;
    } catch (err) {
        return extractApiError(err);
    }
};

//rating api
// export const editRating = async (taskId, rating) => {
//     try {
//         // const data = { taskId, rating };
//         const response = await axios.patch(`/tasks/${taskId}`, rating);
//         console.log(response.data);
//         return response;
//     } catch (err) {
//         return extractApiError(err);
//     }
// };
