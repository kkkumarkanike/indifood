

export const addItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
// const firebase = getFirebase();
    const firestore = getFirestore();

    firestore.collection("items").add({
      ...item,
      createdAt: new Date(),
    }).then((res) =>{
        console.log(res.id);
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
            foodItems[id] = doc.data();
        })
          console.log("foodItems",foodItems);
          dispatch({ type: "GET_ITEMS_SUCCESS" ,res:foodItems});


      }).catch((error) =>{
          dispatch({type:"GET_ITEMS_ERROR"},error)
      })

      
    };
  };
//   * GETTING ONLY FOUR ITEMS IN SERVICE PAGE service.js
// Special Items
  export const getSpecialItems = () => {
    return (dispatch, getState, { getFirestore }) => {
      // Make async call to database
  const foodItems = {};
      const firestore = getFirestore();
      firestore.collection("items").where("category","==","special").limit(4).get().then((data) =>{
        //   .orderBy("createdAt","desc")
          console.log("ALL DOCS with their ids SPECIAL DATA",data);
        data.docs.map((doc) =>{
            const id = doc.id;
        
            foodItems[id] = doc.data();
        })
          console.log("foodItems",foodItems);
          dispatch({ type: "GET_SPECIAL_ITEMS_SUCCESS" ,specialItems:foodItems});


      }).catch((error) =>{
          dispatch({type:"GET_SPECIAL_ITEMS_ERROR"},error)
      })

      
    };
  };
  // Veg Items
  export const getVegItems = () => {
    return (dispatch, { getFirestore }) => {
      // Make async call to database
  const foodItems = {};
      const firestore = getFirestore();
      firestore.collection("items").where("category","==","veg").limit(4).get().then((data) =>{
        //   .orderBy("createdAt","desc")
          console.log("ALL DOCS with their ids VEG DATA",data);
        data.docs.map((doc) =>{
            const id = doc.id;
        
            foodItems[id] = doc.data();
        })
          console.log("foodItems",foodItems);
          dispatch({ type: "GET_VEG_ITEMS_SUCCESS" ,vegItems:foodItems});


      }).catch((error) =>{
          dispatch({type:"GET_VEG_ITEMS_ERROR"},error)
      }) 
    };
  };

export const addItemToCart = (item) =>{
    return (dispatch, getState, { getFirestore,getFirebase }) => {
        // Make async call to database
// const firebase = getFirebase();
        const firestore = getFirestore();
        const firebase = getFirebase();
        console.log("********************** addItemToCart Firebase kaa Firebase *******************",firebase);
        const userMail = firebase.auth().currentUser.email;
        firestore.collection("cart").add({
            ...item,
            count : 1,
            userId : userMail
        }).then((res) =>{
            console.log("Item Added");
            // dispatch({type:"ADD_ITEM_SUCCESS"},res);
        }).catch((error) =>{
            console.log("Error in adding an Item");
            // dispatch({type:"ADD_ITEM_ERROR"},error);
        })

    };
}
export const deleteItemFromCart = (id,details) =>{
    return (dispatch, getState, { getFirestore,getFirebase }) => {
        // Make async call to database
// const firebase = getFirebase();
        const firestore = getFirestore();
        const firebase = getFirebase();
        console.log('Firebase Auth Obj',firebase.auth());
        const itemKeys = Object.keys(details);
        let updatedData = {};
        const updatedKeys = itemKeys.filter(item => item !== id);
        updatedKeys.map(key =>{
            updatedData[key] = details[key];
        })
        firestore.collection("cart").doc(id).delete().then((res) =>{
            console.log("Deleted Successfully");
            dispatch({type : "CART_ITEM_DELETE", data : updatedData});
        }).catch((error) =>{
            console.log("Error in adding an Item");
            // dispatch({type:"ADD_ITEM_ERROR"},error);
        })

    };
}

export const getCartItems = () => {
    return (dispatch, getState, { getFirestore , getFirebase}) => {
        // Make async call to database
        const foodItems = {};
        const firestore = getFirestore();
        const firebase = getFirebase();
        if (localStorage.getItem('email')){
            var userMail =localStorage.getItem('email') ;
        }
        // console.log("*************Fire Store*****************",firebase.auth().currentUser.email);
        firestore.collection("cart").get().then((data) =>{
            // console.log("Cart Items DOCS",data.docs);
            data.docs.map((doc) =>{
                if (userMail){
                    if (doc.data().userId === userMail){
                        foodItems[doc.id] = doc.data();
                    }
                }
                // foodItems[doc.id] = doc.data();
            })
            console.log("getting Cart foodItems",foodItems);
            dispatch({type:"GET_CART_ITEMS_SUCCESS", cart : foodItems});
        }).catch((error) =>{
            // dispatch({type:"GET_ITEMS_ERROR"},error);
        });
    };
};


export let incrementCount = (id, c) =>{
    return (dispatch, getState, { getFirestore }) =>{
        const firebase = getFirestore();
        firebase.collection("cart").doc(id).update({
            count : c + 1
        }).then(res =>{
            console.log("Incremented successfully");
        }).catch(er =>{
            console.log(er);
        })

    }
}
export let decrementCount = (id, c) =>{
    return (dispatch, getState, { getFirestore }) =>{
        const firebase = getFirestore();
        firebase.collection("cart").doc(id).update({
            count : c - 1
        }).then(res =>{
            console.log("Decremented successfully");
        }).catch(er =>{
            console.log(er);
        })

    }
}


export const updateStateCart = (item_id,item_count) =>{
    return{
        type : "UPDATE_STATE_CART",
        id : item_id,
        count : item_count
    }
}

export const getItemDetails = (id) =>{
    return (dispatch, getState, { getFirestore }) =>{
        const firebase = getFirestore();
        firebase.collection("items").doc(id).get().then(doc =>{
            if (doc.exists){
                dispatch({type: "ITEM_DETAILS",data : doc.data()});
            }else{
                console.log("No such document!");
            }
        }).catch(e =>{
            console.log(e);
        })

    }
}

export const emptyCart = () =>{
    return{
        type : "EMPTY_CART"
    }
}
// Normally we write action as an object like
// return {
//     type:"ADD_ITEM",
//     item:item
// }
// With the help of redux-thunk we can write a function and run the async code by halting the dispatch event
// const db = firebase.firestore();
// const data = await db.collection('items').get();
// const doc = data.docs.map(doc => console.log(doc.data()));

