import { combineReducers } from "redux";
import postsReducer from "./posts/postsReducer";
import universitiesReducer from "./universities/universitiesReducer";
import countriesReducer from "./countries/countriesReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  universities: universitiesReducer,
  countries: countriesReducer,
});

export default rootReducer;
