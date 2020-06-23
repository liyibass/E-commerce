import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

// 將state儲存到localStorage中
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}
// 從localStorage裡頭將先前的state取出
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [logger];

const store = createStore(
  rootReducer,
  persistedState, //將取得的state放在這邊，即可恢復成以前的state資料
  composeEnhancers(applyMiddleware(...middleware))
);

// 只要store有更動 就會執行裡頭的callback function
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
