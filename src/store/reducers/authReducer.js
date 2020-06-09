const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: "Login success",
      };
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return state;
    case "LOGOUT_ERROR":
      console.log("logout failed");
      return state;
    default:
      return state;
  }
};

export default authReducer;
