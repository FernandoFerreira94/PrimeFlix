import React from "react"; // Importa a biblioteca React.
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter do react-router-dom para gerenciar as rotas.
import { ToastContainer } from "react-toastify"; // Importa ToastContainer do react-toastify para exibir notificações.
import { Provider } from "react-redux"; // Importa Provider do react-redux para integrar o Redux com o React.
import { PersistGate } from "redux-persist/integration/react"; // Importa PersistGate do redux-persist para persistir o estado do Redux.

// Importações de estilos
import GlobalStyles from "./styles/GlobalStyles"; // Importa os estilos globais.

// Importações de Páginas e Componentes
import Header from "./Components/header"; // Importa o componente Header.
import Rota from "./routes"; // Importa o componente de rotas.
import store, { persistor } from "./store"; // Importa o store do Redux e o persistor do redux-persist.

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Envolve o aplicativo no Provider do Redux para disponibilizar o store. */}
      <PersistGate persistor={persistor}>
        {" "}
        {/* Usa PersistGate para atrasar a renderização da UI até que o estado seja reidratado. */}
        <BrowserRouter>
          {" "}
          {/* Envolve o aplicativo no BrowserRouter para habilitar o roteamento. */}
          <Header /> {/* Renderiza o componente Header. */}
          <Rota /> {/* Renderiza as rotas definidas. */}
          <GlobalStyles /> {/* Aplica os estilos globais. */}
          <ToastContainer autoClose={1500} className="toast-container" />{" "}
          {/* Configura o ToastContainer para notificações com fechamento automático após 1500ms. */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App; // Exporta o componente App como padrão.
