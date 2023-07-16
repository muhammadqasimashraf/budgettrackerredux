const setEmail = (email) => {
  // return {
  //   type: "SET_EMAIL",
  //   payload: email,
  // };
  console.log("Email inside action is ", email);
};

const setPassword = (password) => {
  // return {
  //   type: "SET_PASSWORD",
  //   payload: password,
  // };
  console.log("password inside action is ", password);
};

export const userAction = {
  setEmail,
};
