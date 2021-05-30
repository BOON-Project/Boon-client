import axios from "axios";
import { loadTokenFromStorage } from "./localStorage";

const token = loadTokenFromStorage(); // load authentication token
token && (axios.defaults.headers.token = token); // attach auth token (if exists) to Axios config
// so it will be sent automatically on all our requests to the API
axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || `http://localhost:5000`;

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
    const response = await axios.get(`/user`);
    return response;
  } catch (err) {
    return extractApiError(err);
  }
};

// GET SKILLS
export const getSkills = async () => {
  console.log(`im fetching the skills`);
  try {
    const response = await axios.get(`/skill`);
    return response;
  } catch (err) {
    return extractApiError(err);
  }
};

// GET TASKS
export const getTasks = async () => {
  console.log(`im fetching the tasks`);
  try {
    const response = await axios.get(`/task`);
    return response;
  } catch (err) {
    return extractApiError(err);
  }
};

// ADD TASK
export const addTask = async (formData) => {
  try {
    const response = await axios.post("/task", formData);
    console.log(response);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// SIGNUP USER
export const signupUser = async (formData) => {
  try {
    const response = await axios.post("/user", formData);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// LOGIN USER

export const loginUser = async (formData) => {
  try {
    const response = await axios.post("/user/login", formData);

    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// EDIT USER

export const editUser = async (id, data) => {
  try {
    const response = await axios.patch(`/user/${id}`, data);

    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// GET USERS WITH SKILL

export const getUsersBySkill = async (skillId) => {
  //console.log(`im fetching the users with this skills`);
  try {
    const response = await axios.get(`/skill/${skillId}`);
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

// export const getTask = async (taskId) => {
//   try {
//     const response = await axios.get(`/task/${taskId}`);
//     return response;
//   } catch (err) {
//     return extractApiError(err);
//   }
// };
