import { takeLatest, call, put } from "redux-saga/effects";
import { getGradebooks, setGradebooks, createGradebook, getGradebook, setGradebook } from "./slice";
import gradebookService from "../../services/GradebookService";

function* handleGetGradebooks(action) {
  try {
    const gradebooks = yield call(gradebookService.getGradebooks, action.payload);
    yield put(setGradebooks(gradebooks));
  } catch (error) {
    console.error(error);
  }
}

function* handleCreateGradebook(action) {
  try {
    const gradebook = yield call(gradebookService.createGradebook, action.payload.gradebook);

    if (action.payload.onSuccess) {
      yield call(action.payload.onSuccess, gradebook);
    }
  } catch (error) {
    console.error(error);
  }
}

function* handleGetGradebook(action) {
  try {
    const gradebook = yield call(gradebookService.getGradebook, action.payload);
    yield put(setGradebook(gradebook));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetGradebooks() {
  yield takeLatest(getGradebooks.type, handleGetGradebooks);
}

export function* watchCreateGradebook() {
  yield takeLatest(createGradebook.type, handleCreateGradebook);
}

export function* watchGetGradebook() {
  yield takeLatest(getGradebook.type, handleGetGradebook);
}
