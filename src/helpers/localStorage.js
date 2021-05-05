// GENERAL LOCAL STORAGE HANDLERS
const loadEntryFromStorage = (key) => {
  const userString = localStorage.getItem(key);
  // if item was found in localStorage => parse string into user object
  return userString && JSON.parse(userString);
};

const setItemInStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

const clearItemInStorage = (key) => {
  localStorage.removeItem(key);
};

// USER HANDLERS
exports.loadUserFromStorage = () => {
  return loadEntryFromStorage("user") || undefined;
};

exports.setUserInStorage = (user) => {
  setItemInStorage("user", user);
};

exports.clearUserInStorage = () => {
  clearItemInStorage("user");
};

// TOKEN HANDLERS
exports.loadTokenFromStorage = () => {
  return loadEntryFromStorage("token") || undefined;
};

exports.setTokenInStorage = (token) => {
  setItemInStorage("token", token);
};

exports.clearTokenInStorage = () => {
  clearItemInStorage("token");
};
