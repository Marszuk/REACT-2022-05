import { createStore } from "redux";
import { MemReducer } from "./reducers/globalReducer";

const store = createStore(MemReducer);

export default store;