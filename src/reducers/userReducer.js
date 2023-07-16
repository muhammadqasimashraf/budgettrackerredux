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
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password,
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
