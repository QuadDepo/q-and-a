import * as ACTION_TYPE from "../Consts";

export const addQA = (payload) => {
  return {
    type: ACTION_TYPE.ADD_QA_SUCCESS,
    payload,
  };
};
