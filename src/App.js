import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Pages
import Header from "./Components/header";
import MyRoutes from "./routes";

// styled
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <Header />
      <MyRoutes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
