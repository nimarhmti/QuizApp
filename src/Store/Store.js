import { createStore } from "redux";
import reduce from "./reducer";
const Store = createStore(reduce);
export default Store;
