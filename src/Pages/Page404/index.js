import React, { useEffect } from "react";
import { Container } from "../../styles/GlobalStyles";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <h1>Essa PAGINA NAO EXISTE</h1>
    </Container>
  );
}
