
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
        dispatch({type:"ADD_ITEM_ERROR"},error);
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

export const addItemToCart = (item) =>{
    return (dispatch, getState, { getFirestore,getFirebase }) => {
        // Make async call to database
// const firebase = getFirebase();
        const firestore = getFirestore();
        const firebase = getFirebase();
        console.log('Firebase Auth Obj',firebase.auth());
        firestore.collection("cart").add({
            ...item,
            count : 1
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
    return (dispatch, getState, { getFirestore }) => {
        // Make async call to database
        const foodItems = {};
        const firestore = getFirestore();
        firestore.collection("cart").get().then((data) =>{
            // console.log("Cart Items DOCS",data.docs);
            data.docs.map((doc) =>{
                foodItems[doc.id] = doc.data();
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