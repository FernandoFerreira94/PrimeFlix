import { all } from "redux-saga/effects"; // Importa a função all do redux-saga/effects para combinar múltiplas sagas.

import example from "./example/saga"; // Importa a saga example do módulo example.

export default function* rootSaga() {
  // Função generator que define a saga raiz.
  return yield all([example]); // Combina todas as sagas usando a função all.
}
