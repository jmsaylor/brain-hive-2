import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({


  // in component this will be accessed as store.posts 


  
  posts: postReducer,
});
