import {combineReducers} from "redux"
import authReducer from "./authReducer"
import itemReducer from "./itemReducer"
// For syncing data of firestore data and Connect to a component with that collection
import {firestoreReducer} from "redux-firestore";
// For syncing auth data
import { firebaseReducer } from 'react-redux-firebase'



 const rootReducer = combineReducers({
    auth: authReducer,
    item: itemReducer,
    firestore: firestoreReducer ,
    firebase: firebaseReducer

})
 
export default rootReducer;