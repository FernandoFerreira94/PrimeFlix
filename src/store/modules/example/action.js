import * as types from "../types"; // Importa todas as constantes de tipos de ação do arquivo types.

// Função que cria a ação clicaBotaoRequest.
export function clicaBotaoRequest() {
  return { type: types.BOTAO_CLICADO_REQUEST }; // Retorna uma ação com o tipo BOTAO_CLICADO_REQUEST.
}

// Função que cria a ação clicaBotaoSuccess.
export function clicaBotaoSuccess() {
  return { type: types.BOTAO_CLICADO_SUCCESS }; // Retorna uma ação com o tipo BOTAO_CLICADO_SUCCESS.
}

// Função que cria a ação clicaBotaoFailure.
export function clicaBotaoFailure() {
  return { type: types.BOTAO_CLICADO_FAILURE }; // Retorna uma ação com o tipo BOTAO_CLICADO_FAILURE.
}
