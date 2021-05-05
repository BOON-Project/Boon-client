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

// signup user

export const signupUser = async (formData) => {
	try {
		const response = await axios.post("http://localhost:5000/user", formData);
		return response.data;
	} catch (err) {
		return extractApiError(err);
	}
};

// login user authentication

export const loginUser = async (formData) => {
	try {
		const response = await axios.post(
			"http://localhost:5000/user/login",
			formData
		);

<<<<<<< HEAD
    return response.data;
  } catch (err) {
    return xtractApiError(err)
  }
=======
		return response.data;
	} catch (err) {
		return extractApiError(err);
	}
>>>>>>> 513ed088b6fe2b293680fe7e90df998447499b84
};

// logout user

export const helpCheckoutUser = () =>
	axios.get("http://localhost:5000/users/logout");

// edit user data

export const helpEditUser = (userId, updatedUser) =>
	axios.patch(`http://localhost:5000/users/${userId}`, updatedUser);
