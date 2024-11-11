import * as types from "../types"; // Importa todas as constantes de tipos de ação do arquivo types.

const initialState = {
  botaoClicado: false, // Estado inicial com botaoClicado definido como falso.
};

// Função reducer que manipula o estado baseado nas ações despachadas.
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("estou no success"); // Loga uma mensagem no console para depuração.
      const newState = { ...state }; // Cria uma cópia do estado atual.
      newState.botaoClicado = !newState.botaoClicado; // Inverte o estado de botaoClicado.
      return newState; // Retorna o novo estado.
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log("estou no failure"); // Loga uma mensagem no console para depuração.
      return state; // Retorna o estado atual inalterado.
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log("estou na requisição"); // Loga uma mensagem no console para depuração.
      return state; // Retorna o estado atual inalterado.
    }

    default: {
      return state; // Retorna o estado atual para qualquer ação não reconhecida.
    }
  }
}
