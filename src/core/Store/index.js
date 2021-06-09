import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { QA_Reducer } from "../Reducers";
import { saveToLocalStorage, initialStoreFromLocalStorage } from "../Helpers";
import rootSaga from "../Sagas";

const SagaMiddleware = createSagaMiddleware();

const Store = createStore(
  QA_Reducer,
  initialStoreFromLocalStorage(),
  applyMiddleware(SagaMiddleware)
);

SagaMiddleware.run(rootSaga);

console.log(Store);

Store.subscribe(() => {
  saveToLocalStorage(Store.getState());
  console.log(Store.getState());
});

export default Store;
