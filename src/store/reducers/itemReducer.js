const initState = {
  res: [],
  specialItems: [],
  vegItems: [],
  nonVegItems: [],
  cart: {},
  itemDetails: {},
  orders: {},
  eachOrderDetails : {}

};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state;
    case "ADD_ITEM_ERROR":
      return state;
    case "GET_ITEMS_SUCCESS":
      return {
        ...state,
        res: action.res,
      };
    case "GET_ITEMS_ERROR":
      return state;
    case "GET_SPECIAL_ITEMS_SUCCESS":
      return {
        ...state,
        specialItems: action.specialItems,
      };
    case "GET_SPECIAL_ITEMS_ERROR":
      return state;

    case "GET_VEG_ITEMS_SUCCESS":
      return {
        ...state,
        vegItems: action.vegItems,
      };
    case "GET_VEG_ITEMS_ERROR":
      return state;

    case "GET_NON_VEG_ITEMS_SUCCESS":
      return {
        ...state,
        nonVegItems: action.nonVegItems,
      };
    case "GET_NON_VEG_ITEMS_ERROR":
      return state;

    case "GET_CART_ITEMS_SUCCESS":
      return {
        ...state,
        cart: action.cart,
      };

    case "UPDATE_STATE_CART":
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
      return {
        ...state,
        itemDetails: action.data,
      };

    case "CART_ITEM_DELETE":
      return {
        ...state,
        cart: action.data,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: {},
      };
    case "USER_ORDERS":
      return {
        ...state,
        orders: action.userOrders,
      };
    case "GET_COMPLETED_ORDER_DETAILS":
      return {
        ...state,
        eachOrderDetails : action.data
      };
      ;
    default:
      return state;
  }
};

export default itemReducer;
