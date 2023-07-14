const initialState = [
  {
    email: "qasim@gmail.com",
    password: "qasim123",
  },
  {
    email: "qasim2@gmail.com",
    password: "qasim1234",
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, userName: action.payload };
    case "SET_PASSWORD":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userReducer;
