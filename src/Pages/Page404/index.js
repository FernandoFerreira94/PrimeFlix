import React, { useEffect } from "react"; // Importa React e o hook useEffect.
import { Container } from "../../styles/GlobalStyles"; // Importa o componente estilizado Container.
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate do react-router-dom para navegação.

function alerta() {
  // Função alerta que exibe um alerta com a mensagem "pagina nao encotrada".
  return alert("pagina nao encotrada");
}

export default function Page404() {
  const navigate = useNavigate(); // Cria uma função navigate para redirecionar o usuário.

  useEffect(() => {
    // Hook useEffect que executa quando o componente é montado.
    navigate("/"); // Redireciona o usuário para a página principal.
    alerta(); // Chama a função alerta para exibir a mensagem.
  }, [navigate]); // A dependência [navigate] garante que o efeito só execute quando navigate mudar.

  return (
    <Container>
      <h1>Essa PAGINA NAO EXISTE</h1>{" "}
      {/* Exibe uma mensagem indicando que a página não existe. */}
    </Container>
  );
}
