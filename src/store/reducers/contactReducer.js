const initialState = {
  contactError: null,
  loading: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONTACT_SUBMIT_SUCCESS":
      console.log("contact submit success");

      return {
        ...state,
        contactError: null,
      };
    case "CONTACT_SUBMIT_ERROR":
      console.log("contact submit failed");
      return {
        ...state,
        contactError: "contact submit failed",
      };

    case "SHOW_LOADER":
      console.log("loading true");
      return {
        ...state,
        loading: true,
      };
    case "HIDE_LOADER":
      console.log("loading false");
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default contactReducer;
