const initialState = {
  contactError: null,
  loading: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONTACT_SUBMIT_SUCCESS":
      return {
        ...state,
        contactError: null,
      };
    case "CONTACT_SUBMIT_ERROR":
      return {
        ...state,
        contactError: "contact submit failed",
      };

    case "SHOW_LOADER":
      return {
        ...state,
        loading: true,
      };
    case "HIDE_LOADER":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default contactReducer;
