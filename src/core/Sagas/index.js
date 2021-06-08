import { v4 as uuidv4 } from "uuid";
import { put, takeEvery } from "redux-saga/effects";
import * as ACTION_TYPE from "../Consts";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* add_QA_saga({ payload }) {
  try {
    const item = { ...payload, uuid: uuidv4() };
    console.log(item);
    yield put({ type: ACTION_TYPE.ADD_QA_SUCCESS, item });
  } catch (e) {
    console.error(e);
    yield put({ type: ACTION_TYPE.ADD_QA_FAILURE, message: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(ACTION_TYPE.ADD_QA_REQUEST, add_QA_saga);
}
