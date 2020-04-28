import { combineReducers } from "redux";

import messagesReducer from "./messages";
import userReducer from "./user";

export default combineReducers({
  messages: messagesReducer,
  user: userReducer,
});
