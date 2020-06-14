export const submitContact = (contactDetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const firebase = getFirebase();

    const currentUser = firebase.auth().currentUser;
    db.collection("contactInfo")
      .doc()
      .set({
        name: contactDetails.name,
        email: contactDetails.email,
        message: contactDetails.message,
      })
      .then(() => {
        dispatch({ type: "CONTACT_SUBMIT_SUCCESS" });
        dispatch({type:"HIDE_LOADER"})
      })
      .catch((error) => {
        dispatch({ type: "CONTACT_SUBMIT_ERROR", error });
      });
  };
};


export const showLoader = () =>{
  return (dispatch) =>{
    dispatch({type:"SHOW_LOADER"})
  }
}
export const hideLoader = () =>{
  return (dispatch) =>{
    dispatch({type:"HIDE_LOADER"})
  }
}