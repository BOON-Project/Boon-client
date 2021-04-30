import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || `http://localhost:5000`; 

const extractApiError = (errAxios) => {
  return errAxios.response ? errAxios.response.data : { error: { message: 'API not reachable' }}
}


// get users
export const getUsers = async () => {
  console.log(`im fetching the users`);
  try {
    const response = await axios.get(`/user`);
    console.log(response.data);
    return response;
  }
  catch(err) {
    console.log(err)
  }
};


// GET SKILLS
export const getSkills= async () => {
  console.log(`im fetching the skills`);
  try {
    const response = await axios.get(`/skill`);
    return response;
  }
  catch(err) {
    console.log(err)
  }
};

  

// signup user

export const helpAddUser = (formData) =>
  axios.post("http://localhost:5000/user", formData);

// login user authentication

export const helpCheckUser = (formData) =>
  axios.post("http://localhost:5000/user/login", formData);

// logout user

export const helpCheckoutUser = () =>
  axios.get("http://localhost:5000/users/logout");

// edit user data

export const helpEditUser = (userId, updatedUser) =>
  axios.patch(`http://localhost:5000/users/${userId}`, updatedUser);