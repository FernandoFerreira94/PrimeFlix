import * as types from "../types";

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("estou no success");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;

      return newState;
    }
  }
  switch (action.type) {
    case types.BOTAO_CLICADO_FAILURE: {
      console.log("estou no failune");
      return state;
    }
  }
  switch (action.type) {
    case types.BOTAO_CLICADO_REQUEST: {
      console.log("estou na requisição");
      return state;
    }

    default: {
      return state;
    }
  }
}
