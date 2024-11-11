import { createStore, applyMiddleware } from "redux"; // Importa createStore e applyMiddleware do Redux.
import createSagaMiddleware from "redux-saga"; // Importa createSagaMiddleware do redux-saga para lidar com efeitos colaterais.
import persistStore from "redux-persist/es/persistStore"; // Importa persistStore do redux-persist para persistir o estado do Redux.

import rootReduce from "./modules/rootReduce"; // Importa o rootReducer da aplicação.
import rootSaga from "./modules/rootSaga"; // Importa o rootSaga da aplicação.

import persistedReducers from "./modules/reduxPersist"; // Importa a configuração dos reducers persistentes.

const sagaMiddleware = createSagaMiddleware(); // Cria o middleware do Redux Saga.

const store = createStore(
  persistedReducers(rootReduce), // Cria o store com os reducers persistentes.
  applyMiddleware(sagaMiddleware) // Aplica o middleware do Saga ao store.
);

sagaMiddleware.run(rootSaga); // Executa a saga raiz.

export const persistor = persistStore(store); // Cria e exporta o persistor para persistir o estado do store.
export default store; // Exporta o store como padrão.
