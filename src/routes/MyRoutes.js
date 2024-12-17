import React from "react"; // Importa a biblioteca React.
import { Route, Navigate } from "react-router-dom"; // Importa Route, Navigate e Routes do react-router-dom.
import PropTypes from "prop-types"; // Importa PropTypes para validação de propriedades.

// Função que define uma rota condicional.
export default function MyRoutes({ component: Component, isClose, path }) {
  const isLoggedIn = false; // Lógica de verificação de login (atualmente definida como falsa).

  return (
    <Route
      path={path}
      element={
        isClose && !isLoggedIn ? ( // Se isClose for verdadeiro e o usuário não estiver logado,
          <Navigate to="/login" /> // Redireciona para a página de login.
        ) : (
          <Component /> // Caso contrário, renderiza o componente passado.
        )
      }
    />
  );
}

// Define valores padrão para as props.
MyRoutes.defaultProps = {
  isClose: false, // Por padrão, isClose é falso.
};

// Define tipos de propTypes para validação.
MyRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
    .isRequired, // Componente deve ser um tipo válido de React ou função.
  isClose: PropTypes.bool, // isClose deve ser um booleano.
};
