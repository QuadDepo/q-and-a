import * as ACTION_TYPE from "../Consts";

export const QA_Reducer = (
  state = { qa_list: [], error: false, loading: false },
  action
) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_QA_REQUEST:
      return { ...state, loading: true, error: false };
    case ACTION_TYPE.ADD_QA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        qa_list: [...state.qa_list, action.item],
      };
    case ACTION_TYPE.ADD_QA_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
