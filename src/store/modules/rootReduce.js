import { combineReducers } from "redux"; // Importa a função combineReducers do Redux para combinar múltiplos reducers em um único.

import exampleReducer from "./example/reducer"; // Importa o reducer do módulo example.

export default combineReducers({
  example: exampleReducer, // Combina o reducer exampleReducer sob a chave 'example'.
});
