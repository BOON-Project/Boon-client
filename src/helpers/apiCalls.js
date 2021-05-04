import axios from "axios";
axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || `http://localhost:5000`;

const extractApiError = (errAxios) => {
  return errAxios.response
    ? errAxios.response.data
    : { error: { message: "API not reachable" } };
};

// get users
export const getUsers = async () => {
  console.log(`im fetching the users`);
  try {
    const response = await axios.get(`/user`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// GET SKILLS
export const getSkills = async () => {
  console.log(`im fetching the skills`);
  try {
    const response = await axios.get(`/skill`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// signup user

export const helpAddUser = async (formData) =>{
console.log("Signing up user: ", formData);
try {
  const response = axios.post("http://localhost:5000/user", formData);
  return response.formData
} catch (err) {
  return extractApiError(err)
}
};

// login user authentication

export const helpCheckUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/user/login",
      formData
    );

    return response.data;
  } catch (err) {
    return err.response.data.error;
  }
};

// logout user

export const helpCheckoutUser = () =>
  axios.get("http://localhost:5000/user/logout");

// edit user data

export const helpEditUser = (userId, updatedUser) =>
  axios.patch(`http://localhost:5000/user/${userId}`, updatedUser);
