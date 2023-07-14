export const setUserName = (userName) => {
  return {
    type: "SET_USERNAME",
    payload: userName,
  };
};

export const setEmail = (email) => {
  return {
    type: "SET_EMAIL",
    payload: email,
  };
};
