import { v4 as uuidv4 } from "uuid";
import { put, takeEvery } from "redux-saga/effects";
import * as ACTION_TYPE from "../Consts";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* add_QA_saga({ payload }) {
  try {
    const item = { ...payload, uuid: uuidv4() };

    if (payload.checked) yield delay(5000);

    yield put({ type: ACTION_TYPE.ADD_QA_SUCCESS, item });
  } catch (e) {
    console.error(e);
    yield put({ type: ACTION_TYPE.ADD_QA_FAILURE, message: e.message });
  }
}

function* edit_QA_saga({ payload }) {
  try {
    yield put({ type: ACTION_TYPE.EDIT_QA_SUCCESS, item: payload });
  } catch (e) {
    console.error(e);
    yield put({ type: ACTION_TYPE.EDIT_QA_FAILURE, message: e.message });
  }
}

function* delete_QA_saga({ payload }) {
  try {
    yield put({ type: ACTION_TYPE.DELETE_QA_SUCCESS, uuid: payload });
  } catch (e) {
    console.error(e);
    yield put({ type: ACTION_TYPE.DELETE_QA_FAILURE, message: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(ACTION_TYPE.ADD_QA_REQUEST, add_QA_saga);
  yield takeEvery(ACTION_TYPE.EDIT_QA_REQUEST, edit_QA_saga);
  yield takeEvery(ACTION_TYPE.DELETE_QA_REQUEST, delete_QA_saga);
}
