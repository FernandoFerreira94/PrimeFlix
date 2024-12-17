import { all } from "redux-saga/effects"; // Importa a função all do redux-saga/effects para combinar múltiplas sagas.

import auth from "./auth/saga"; // Importa a saga example do módulo example.

export default function* rootSaga() {
  // Função generator que define a saga raiz.
  return yield all([auth]); // Combina todas as sagas usando a função all.
}
