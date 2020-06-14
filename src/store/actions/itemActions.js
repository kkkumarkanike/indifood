
export const addItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
// const firebase = getFirebase();
    const firestore = getFirestore();

    firestore.collection("items").add({
      ...item,
      createdAt: new Date(),
    }).then((res) =>{
        dispatch({ type: "ADD_ITEM", item });
    }).catch((error) =>{
        dispatch({type:"ADD_ITEM_ERROR",error});
    })
    
  };
};

export const getItems = () => {
    return (dispatch, getState, { getFirestore }) => {
      // Make async call to database
  const foodItems = [];
      const firestore = getFirestore();
      firestore.collection("items").get().then((data) =>{
          console.log("DOCS",data.docs)
        data.docs.map((doc) =>{
            foodItems.push(doc.data())
        })
          console.log("foodItems",foodItems)
          dispatch({ type: "GET_ITEMS_SUCCESS" ,res:foodItems});


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