import {storage} from "../../config/Config"
export const addItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
// const firebase = getFirebase();
    const firestore = getFirestore();


    // const storageRef = storage.ref().child(item.img.name);
    // storageRef.put(item.img).then((snap) =>{
    //   storageRef.getDownloadURL().then((url) =>{
    //     console.log(url)
    //   })
    // })

    firestore.collection("items").add({
      ...item,
      createdAt: new Date(),
    }).then((res) =>{
        dispatch({ type: "ADD_ITEM", item },res);
    }).catch((error) =>{
        dispatch({type:"ADD_ITEM_ERROR"},error);
    })
    
  };
};

export const getItems = () => {
    return (dispatch, getState, { getFirestore }) => {
      // Make async call to database
  
      const firestore = getFirestore();
      firestore.collection("items").get().then((data) =>{
        data.docs.map((doc) =>{
          console.log("HLEJLKJLKF",doc.id)
          dispatch({ type: "GET_ITEMS_SUCCESS" ,res:doc.data()});
        })
         
      }).catch((error) =>{
          dispatch({type:"GET_ITEMS_ERROR"},error)
      })

      
    };
  };

// Normally we write action as an object like
// return {
//     type:"ADD_ITEM",
//     item:item
// }
// With the help of redux-thunk we can write a function and run the async code by halting the dispatch event
// const db = firebase.firestore();
// const data = await db.collection('items').get();
// const doc = data.docs.map(doc => console.log(doc.data()));