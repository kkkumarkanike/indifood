const initState = {
  loginError: null,
  signUpError: null,
  isSignIn: false,
  loading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'SIGNUP_START':
      return {
        ...state,
        loading: true,
      };

    case 'LOGIN_SUCCESS':
      localStorage.setItem('signIn', true);
      localStorage.setItem('email', action.email);
    case "LOGIN_ERROR":

      return {
        ...state,
        loginError: 'Login success',
        isSignIn: true,
        loading: false,
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        loginError: action.error.message,
        loading: false,
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');

      return {
        ...state,
        loading : false,
        signUpError: 'SingUp Success Please Login...',
      };
    case 'SIGNUP_ERROR':
      console.log('signup error');

      return {
        ...state,
        loading : false,
        signUpError: action.error.message,
      };
    case 'SIGNOUT_SUCCESS':
      localStorage.removeItem('signIn');
      localStorage.removeItem('email');
      return {
        ...state,
        loginError: null,
        signUpError: null,
      };
    case 'SIGNOUT_ERROR':
      return {
        ...state,
      };
    case 'RESET_PASS_SUCCESS':
      return {
        ...state,
      };
    case 'RESET_PASS_ERROR':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
