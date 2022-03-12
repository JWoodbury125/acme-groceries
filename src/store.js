import { combineReducers, createStore } from "redux";

const initialState = {
  groceries: [],
  view: "",
};

const groceryReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD":
      return action.groceries;
    case "UPDATE":
      return state.map((grocery) =>
        grocery.id === action.grocery.id ? action.grocery : grocery
      );
    case "CREATE":
      return [...state, action.grocery];
    default:
      return state;
  }
};
const viewReducer = (state = "", action) => {
  if (action.type === "SET_VIEW") {
    state = action.view;
  }
  return state;
};

const reducer = combineReducers({
  groceries: groceryReducer,
  view: viewReducer,
});

const store = createStore(reducer);

export default store;
