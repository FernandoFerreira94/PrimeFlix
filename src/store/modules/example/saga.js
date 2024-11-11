import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import * as actions from "./action";
import * as types from "../types";

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    toast.success("deu certo");
    yield put(actions.clicaBotaoSuccess());
  } catch (error) {
    toast.error("deu erro");
    yield put(actions.clicaBotaoFailure());
    console.log(error);
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
