import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// styled
import GlobalStyles from "./styles/GlobalStyles";

// Pages
import Header from "./Components/header";
import Rota from "./routes";
import store, { persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Rota />
          <GlobalStyles />
          <ToastContainer autoClose={1500} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
