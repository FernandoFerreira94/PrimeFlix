import { toast } from "react-toastify";
import { Container } from "../../styles/GlobalStyles";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
export default function Page404() {
  useEffect(() => {
    toast.error("Pagina nao encontrada");
  }, []);
  return (
    <Container>
      <h1>PAGINA NAO ENCONTRADA</h1>
    </Container>
  );
}
