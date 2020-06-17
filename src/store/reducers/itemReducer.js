const initState = {
    res:[],
    cart : {},
    itemDetails : {}
};

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
          console.log('create item success');
          return state;
        case 'ADD_ITEM_ERROR':
          console.log('create item error');
          return state;
        case 'GET_ITEMS_SUCCESS':
            console.log("Getting all items")
            
            return {
              ...state,
              res:action.res
            }
        case 'GET_ITEMS_ERROR':
            console.log("Getting all items error")
            return state
        case 'GET_CART_ITEMS_SUCCESS':
            console.log("Getting all items")
            return {
                ...state,
                cart: action.cart
            }

        case 'UPDATE_STATE_CART':
            console.log("Cart count updated");
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.id] : {
                        ...state.cart[action.id],
                        count : action.count
                    }
                }
            }
        case 'ITEM_DETAILS':
            console.log("Item Details Got");
            return {
                ...state,
                itemDetails: action.data
            }

        case 'CART_ITEM_DELETE':
            console.log("Item Deleted from State");
            return {
                ...state,
                cart: action.data
            }
        case 'EMPTY_CART':
            console.log("Cart Emptied");
            return {
                ...state,
                cart: {}
            }
        default:
          return state;
      }
};

export default itemReducer;
