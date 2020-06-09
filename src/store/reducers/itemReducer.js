const initState = {
  res:null
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
        default:
          return state;
      }
};

export default itemReducer;
