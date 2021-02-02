import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import products from "./products_reducer";
import ui from "./ui_reducer";

const RootReducer = combineReducers({
  session,
  products,
  ui,
  errors
});

export default RootReducer;