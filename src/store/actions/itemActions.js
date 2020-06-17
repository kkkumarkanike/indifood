
export const addItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
// const firebase = getFirebase();
    const firestore = getFirestore();

    firestore.collection("items").add({
      ...item,
      createdAt: new Date(),
    }).then((res) =>{
        console.log(res.id)
        dispatch({ type: "ADD_ITEM", item },res);
    }).catch((error) =>{
        dispatch({type:"ADD_ITEM_ERROR",error});
    })
    
  };
};

export const getItems = () => {
    return (dispatch, getState, { getFirestore }) => {
      // Make async call to database
  const foodItems = {};
      const firestore = getFirestore();
      firestore.collection("items").orderBy("createdAt","desc").get().then((data) =>{
          console.log("ALL DOCS with their ids main DATA",data);
        data.docs.map((doc) =>{
            const id = doc.id;
            // let obj = {};
            // obj[id] = doc.data();
            // console.log(obj);
            foodItems[id] = doc.data();
        })
          console.log("foodItems",foodItems);
          dispatch({ type: "GET_ITEMS_SUCCESS" ,res:foodItems});


      }).catch((error) =>{
          dispatch({type:"GET_ITEMS_ERROR"},error)
      })

      
    };
  };
// Special Items
  export const getSpecialItems = () => {
    return (dispatch, getState, { getFirestore }) => {
      // Make async call to database
  const foodItems = {};
      const firestore = getFirestore();
      firestore.collection("items").where("category","==","special").orderBy("createdAt","desc").limit(4).get().then((data) =>{
          console.log("ALL DOCS with their ids main DATA",data);
        data.docs.map((doc) =>{
            const id = doc.id;
            // let obj = {};
            // obj[id] = doc.data();
            // console.log(obj);
            foodItems[id] = doc.data();
        })
          console.log("foodItems",foodItems);
          dispatch({ type: "GET_ITEMS_SUCCESS" ,res:foodItems});


      }).catch((error) =>{
          dispatch({type:"GET_ITEMS_ERROR"},error)
      })

      
    };
  };

export const addItemToCart = (item) =>{
    return (dispatch, getState, { getFirestore,getFirebase }) => {
        // Make async call to database
// const firebase = getFirebase();
        const firestore = getFirestore();
        const firebase = getFirebase();
        const currentUser = firebase.auth().currentUser;

        firestore.collection("cart").add({
            ...item
        }).then((res) =>{
            console.log("Item Added");
            // dispatch({type:"ADD_ITEM_SUCCESS"},res);
        }).catch((error) =>{
            console.log("Error in adding an Item");
            // dispatch({type:"ADD_ITEM_ERROR"},error);
        })

    };
}

export const getCartItems = () => {
    return (dispatch, getState, { getFirestore }) => {
        // Make async call to database
        const foodItems = [];
        const firestore = getFirestore();
        firestore.collection("cart").get().then((data) =>{
            // console.log("Cart Items DOCS",data.docs);
            data.docs.map((doc) =>{
                foodItems.push(doc.data())
            })
            console.log("getting Cart foodItems",foodItems)
            dispatch({type:"GET_CART_ITEMS_SUCCESS", cart : foodItems});
        }).catch((error) =>{
            // dispatch({type:"GET_ITEMS_ERROR"},error);
        });
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