
import axios from 'axios';

export const addItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
    // const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection('items')
      .add({
        ...item,
        createdAt: new Date(),
      })
      .then((res) => {
        dispatch({ type: 'ADD_ITEM', item }, res);
      })
      .catch((error) => {
        dispatch({ type: 'ADD_ITEM_ERROR', error });
      });
  };
};

export const getItems = () => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
    const foodItems = {};
    const firestore = getFirestore();
    firestore
      .collection('items')
      .orderBy('createdAt', 'desc')
      .get()
      .then((data) => {
        data.docs.map((doc) => {
          const id = doc.id;
          foodItems[id] = doc.data();
        });
        dispatch({ type: 'GET_ITEMS_SUCCESS', res: foodItems });
      })
      .catch((error) => {
        dispatch({ type: 'GET_ITEMS_ERROR' }, error);
      });
  };
};
//   * GETTING ONLY FOUR ITEMS IN SERVICE PAGE service.js
// Special Items
export const getSpecialItems = () => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
    const foodItems = {};
    const firestore = getFirestore();
    firestore
      .collection('items')
      .where('category', '==', 'special')
      //   .      orderBy("createdAt")
      .limit(4)
      .get()
      .then((data) => {
        //   .orderBy("createdAt","desc")
        data.docs.map((doc) => {
          const id = doc.id;

          foodItems[id] = doc.data();
        });
        dispatch({
          type: 'GET_SPECIAL_ITEMS_SUCCESS',
          specialItems: foodItems,
        });
      })
      .catch((error) => {
        dispatch({ type: 'GET_SPECIAL_ITEMS_ERROR' }, error);
      });
  };
};
// Veg Items
export const getVegItems = () => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
    const foodItems = {};
    const firestore = getFirestore();
    firestore
      .collection('items')
      .where('category', '==', 'veg')
      .limit(4)
      .get()
      .then((data) => {
        //   .orderBy("createdAt","desc")
        data.docs.map((doc) => {
          const id = doc.id;

          foodItems[id] = doc.data();
        });
        dispatch({ type: 'GET_VEG_ITEMS_SUCCESS', vegItems: foodItems });
      })
      .catch((error) => {
        dispatch({ type: 'GET_VEG_ITEMS_ERROR' }, error);
      });
  };
};
// Non-veg Items
export const getNonVegItems = () => {
  return (dispatch, getState, { getFirestore }) => {
    // Make async call to database
    const foodItems = {};
    const firestore = getFirestore();
    firestore
      .collection('items')
      .where('category', '==', 'non-veg')
      .limit(4)
      .get()
      .then((data) => {
        //   .orderBy("createdAt","desc")
        data.docs.map((doc) => {
          const id = doc.id;

          foodItems[id] = doc.data();
        });
        dispatch({ type: 'GET_NON_VEG_ITEMS_SUCCESS', nonVegItems: foodItems });
      })
      .catch((error) => {
        dispatch({ type: 'GET_NON_VEG_ITEMS_ERROR' }, error);
      });
  };
};

export const addItemToCart = (item) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to database
    // const firebase = getFirebase();
    const firestore = getFirestore();
    const firebase = getFirebase();
   
    const userMail = firebase.auth().currentUser.email;
   
    firestore
      .collection('cart')
      .add({
        ...item,
        count: 1,
        userId: userMail,
      })
      .then((res) => {
        dispatch({ type: 'ADD_ITEM_SUCCESS' }, res);
      })
      .catch((error) => {
        dispatch({ type: 'ADD_ITEM_ERROR' }, error);
      });
  };
};
export const deleteItemFromCart = (id, details) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to database
    // const firebase = getFirebase();
    const firestore = getFirestore();
    const firebase = getFirebase();
    const itemKeys = Object.keys(details);
    let updatedData = {};
    const updatedKeys = itemKeys.filter((item) => item !== id);
    updatedKeys.map((key) => {
      updatedData[key] = details[key];
    });
    firestore
      .collection('cart')
      .doc(id)
      .delete()
      .then((res) => {
        dispatch({ type: 'CART_ITEM_DELETE', data: updatedData });
      })
      .catch((error) => {
        // dispatch({type:"ADD_ITEM_ERROR"},error);
      });
  };
};

export const getCartItems = () => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to database
    const foodItems = {};
    const firestore = getFirestore();
    const firebase = getFirebase();
    if (localStorage.getItem('email')) {
      var userMail = localStorage.getItem('email');
    }
    
    firestore
      .collection('cart')
      .get()
      .then((data) => {
        data.docs.map((doc) => {
          if (userMail) {
            if (doc.data().userId === userMail) {
              foodItems[doc.id] = doc.data();
            }
          }
          // foodItems[doc.id] = doc.data();
        });
        dispatch({ type: 'GET_CART_ITEMS_SUCCESS', cart: foodItems });
      })
      .catch((error) => {
        // dispatch({type:"GET_ITEMS_ERROR"},error);
      });
  };
};

export let incrementCount = (id, c) => {
  return (dispatch, getState, { getFirestore }) => {
    const firebase = getFirestore();
    firebase
      .collection('cart')
      .doc(id)
      .update({
        count: c + 1,
      })
      .then((res) => {})
      .catch((er) => {});
  };
};
export let decrementCount = (id, c) => {
  return (dispatch, getState, { getFirestore }) => {
    const firebase = getFirestore();
    firebase
      .collection('cart')
      .doc(id)
      .update({
        count: c - 1,
      })
      .then((res) => {})
      .catch((er) => {});
  };
};

export const updateStateCart = (item_id, item_count) => {
  return {
    type: 'UPDATE_STATE_CART',
    id: item_id,
    count: item_count,
  };
};

export const getItemDetails = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firebase = getFirestore();
    firebase
      .collection('items')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({ type: 'ITEM_DETAILS', data: doc.data() });
        } else {
        }
      })
      .catch((e) => {});
  };
};

export const emptyCart = () =>{
    return{
        type : "EMPTY_CART"
    }
}

export const cleanCart = (ids) =>{
    return (dispatch, getState, { getFirestore }) =>{
        const firebase = getFirestore();
        ids.map(id =>{
            firebase.collection("cart").doc(id).delete();
        })
    }
}
export const orders = (order) =>{
    return {
        type : "USER_ORDERS",
        userOrders : order
    }
}
export const getOrders = () =>{
    return dispatch => {

        if (localStorage.getItem('email')){
            var userMail =localStorage.getItem('email') ;
        }
        axios.get("https://indifood-8870f.firebaseio.com/orders.json")
        .then(res =>{
            let userData ={};
            const data = res.data;
            const userDataIds = Object.keys(data).filter(id => data[id].email === userMail);
            userDataIds.map(id =>{
                userData[id] = data[id];
            });
        
            dispatch(orders(userData))
        })
    }
}
export const getDetails = (details) =>{
  return {
    type : "GET_COMPLETED_ORDER_DETAILS",
    data : details
  }
}
export const getOrderedDetails = (id) =>{
  return dispatch => {
    axios
    .get(
      "https://indifood-8870f.firebaseio.com/orders/" +
        id +
        ".json"
    )
    .then((res) => {
      console.log("Details Got");
      dispatch(getDetails(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

