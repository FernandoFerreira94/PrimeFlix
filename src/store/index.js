import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import persistStore from "redux-persist/es/persistStore";

import rootReduce from "./modules/rootReduce";
import rootSaga from "./modules/rootSaga";

import persistedReducers from "./modules/reduxPersist";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducers(rootReduce),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
