const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        email: "",
        password: "",
      };
    default:
      return state;
  }
};

export default userReducer;
