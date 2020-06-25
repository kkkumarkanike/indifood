const initState = {
  res: [],
  specialItems: [],
  vegItems: [],
  nonVegItems: [],
  cart: {},
  itemDetails: {},
  orders : {}
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("create item success");
      return state;
    case "ADD_ITEM_ERROR":
      console.log("create item error");
      return state;
    case "GET_ITEMS_SUCCESS":
      console.log("Getting all items");

      return {
        ...state,
        res: action.res,
      };
    case "GET_ITEMS_ERROR":
      console.log("Getting all items error");
      return state;
    case "GET_SPECIAL_ITEMS_SUCCESS":
      console.log("Getting Special items error");
      return {
        ...state,
        specialItems: action.specialItems,
      };
    case "GET_SPECIAL_ITEMS_ERROR":
      console.log("Getting Special items error");
      return state;

    case "GET_VEG_ITEMS_SUCCESS":
      console.log("Getting Veg items error");
      return {
        ...state,
        vegItems: action.vegItems,
      };
    case "GET_VEG_ITEMS_ERROR":
      console.log("Getting Veg items error");
      return state;

    case "GET_NON_VEG_ITEMS_SUCCESS":
      console.log("Getting Non-veg items success");
      return {
        ...state,
        nonVegItems: action.nonVegItems,
      };
    case "GET_NON_VEG_ITEMS_ERROR":
      console.log("Getting Non-veg items error");
      return state;

    case "GET_CART_ITEMS_SUCCESS":
      console.log("Getting all items");
      return {
        ...state,
        cart: action.cart,
      };

    case "UPDATE_STATE_CART":
      console.log("Cart count updated");
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.id]: {
            ...state.cart[action.id],
            count: action.count,
          },
        },
      };
    case "ITEM_DETAILS":
      console.log("Item Details Got");
      return {
        ...state,
        itemDetails: action.data,
      };

    case "CART_ITEM_DELETE":
      console.log("Item Deleted from State");
      return {
        ...state,
        cart: action.data,
      };
    case "EMPTY_CART":
      console.log("Cart Emptied");
      return {
        ...state,
        cart: {},
      };
    case "USER_ORDERS":
      console.log("getting orders done");
      return {
        ...state,
        orders: action.userOrders
      };
    default:
      return state;
  }
};

export default itemReducer;
