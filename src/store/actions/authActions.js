export const login = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const signUp = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const db = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        return db.collection("users").doc(res.user.uid).set({
          name: credentials.name,
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "SIGNUP_ERROR", error });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "SIGNOUT_ERROR", error });
      });
  };
};

export const resetPassword = () =>{
  return (dispatch,getState,{getFirebase}) =>{
    const firebase = getFirebase();
    const currentUser = firebase.auth().currentUser;
    firebase.auth().sendPasswordResetEmail(currentUser.email).then(() =>{
      dispatch({type:"RESET_PASS_SUCCESS"});
    }).catch((error) =>{
      dispatch({type:"RESET_PASS_ERROR",error});
    })
  }
}
