import { combineReducers } from "redux";
import postsReducer from "./PostsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  postsReducer,
  userReducer,
});
