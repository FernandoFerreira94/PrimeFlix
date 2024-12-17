import * as types from "../types"; // Importa todas as constantes de tipos de ação do arquivo types.

// Função que cria a ação clicaBotaoRequest.
export function LOGIN_REQUEST(payLoad) {
  return { type: types.LOGIN_REQUEST, payLoad }; // Retorna uma ação com o tipo BOTAO_CLICADO_REQUEST.
}

// Função que cria a ação clicaBotaoSuccess.
export function LOGIN_SUCCESS(payLoad) {
  return { type: types.LOGIN_SUCCESS, payLoad }; // Retorna uma ação com o tipo BOTAO_CLICADO_SUCCESS.
}

// Função que cria a ação clicaBotaoFailure.
export function LOGIN_FAILURE(payLoad) {
  return { type: types.LOGIN_FAILURE, payLoad }; // Retorna uma ação com o tipo BOTAO_CLICADO_FAILURE.
}
