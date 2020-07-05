const initState = {
  authError: null,
  isSignIn : false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem('signIn',true);
      localStorage.setItem('email',action.email);
      return {
        ...state,
        authError: "Logging in...",
        isSignIn: true
      };
    case "LOGIN_ERROR":

      return {
        ...state,
        authError: action.error.message,
      };
    case "SIGNUP_SUCCESS":
  
      return {
        ...state,
        authError: "SingUp Success Please Login...",
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.error.message,
      };
    case "SIGNOUT_SUCCESS":
      localStorage.removeItem('signIn');
      localStorage.removeItem('email');
      return {
        ...state,
        authError: null,
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
