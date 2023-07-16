export const loginAction = (email, password) => {
  return {
    type: "LOGIN",
    payload: {
      email,
      password,
    },
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
