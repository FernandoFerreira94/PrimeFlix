import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import RouterApp from "./routes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <RouterApp />
      <GlobalStyle />
      <ToastContainer autoClose={2000} pauseOnHover={false} />
    </>
  );
}
