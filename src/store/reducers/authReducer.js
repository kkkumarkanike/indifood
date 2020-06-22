const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: "Login Success...",
      };
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: action.error.message,
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");

      return {
        ...state,
        authError: "SingUp Success...",
      };
    case "SIGNUP_ERROR":
      console.log("signup error");

      return {
        ...state,
        authError: action.error.message,
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        authError: "SignOut Success...",
      };
    case "SIGNOUT_ERROR":
      return {
        ...state,
        authError: action.error.message,
      };
    case "RESET_PASS_SUCCESS":
      return {
        ...state,
        authError: "Reset Password Success...",
      };
    case "RESET_PASS_ERROR":
      return {
        ...state,
        authError: action.error.message,
      };

    default:
      return state;
  }
};

export default authReducer;
