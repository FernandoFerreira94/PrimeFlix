import React from "react"; // Importa a biblioteca React.
import ReactDOM from "react-dom/client"; // Importa o módulo ReactDOM para renderizar componentes React no DOM.
import App from "./App"; // Importa o componente principal App.
import reportWebVitals from "./reportWebVitals"; // Importa a função reportWebVitals para medir o desempenho da aplicação.

const root = ReactDOM.createRoot(document.getElementById("root")); // Cria um root do ReactDOM na div com id "root".
root.render(
  <React.StrictMode>
    {" "}
    {/* Envolve a aplicação em React.StrictMode para ajudar a identificar problemas no código. */}
    <App /> {/* Renderiza o componente principal App. */}
  </React.StrictMode>
);

reportWebVitals(); // Chama a função reportWebVitals para iniciar a medição de desempenho da aplicação.
