import { combineReducers } from "redux"; // Importa a função combineReducers do Redux para combinar múltiplos reducers em um único.
import auth from "./auth/reducer";
import exampleReducer from "./example/reducer"; // Importa o reducer do módulo example.

export default combineReducers({
  auth,
});
