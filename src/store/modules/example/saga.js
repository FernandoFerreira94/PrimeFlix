import { call, put, all, takeLatest } from "redux-saga/effects"; // Importa as funções call, put, all e takeLatest do redux-saga/effects.
import { toast } from "react-toastify"; // Importa o toast do react-toastify para exibir notificações.

import * as actions from "./action"; // Importa todas as ações do arquivo action.
import * as types from "../types"; // Importa todos os tipos de ação do arquivo types.

// Função que simula uma requisição assíncrona com uma promessa.
const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // Resolve a promessa após 600ms.
    }, 600);
  });

// Função generator que lida com a requisição de exemplo.
function* exampleRequest() {
  try {
    yield call(requisicao); // Chama a função requisicao e espera até que ela seja resolvida.
    toast.success("deu certo"); // Exibe uma notificação de sucesso.
    yield put(actions.clicaBotaoSuccess()); // Despacha a ação de sucesso.
  } catch (error) {
    toast.error("deu erro"); // Exibe uma notificação de erro.
    yield put(actions.clicaBotaoFailure()); // Despacha a ação de falha.
    console.log(error); // Loga o erro no console para depuração.
  }
}

// Exporta a saga raiz que escuta a ação BOTAO_CLICADO_REQUEST e chama exampleRequest.
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
