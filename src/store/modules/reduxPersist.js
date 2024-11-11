import storage from "redux-persist/lib/storage"; // Importa o storage padrão (localStorage) do redux-persist.
import { persistReducer } from "redux-persist"; // Importa persistReducer do redux-persist para persistir os reducers.

export default (reducers) => {
  // Exporta uma função anônima que recebe os reducers como parâmetro.
  const persisteReducers = persistReducer(
    {
      key: "REACT-BASE", // Chave utilizada para identificar a aplicação.
      storage, // Define o storage a ser utilizado (neste caso, localStorage).
      whitelist: ["example"], // Lista de reducers que serão persistidos.
    },
    reducers // Passa os reducers originais para serem persistidos.
  );

  return persisteReducers; // Retorna os reducers persistidos.
};
