import { combineReducers } from "redux";
import postReducer from "./postReducer";
import formReducer from "./formReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  newPost: formReducer,
  posts: postReducer,
  search: searchReducer,
});
