import { put, takeLatest, call } from "@redux-saga/core/effects";
import gradebookService from "../../services/GradebookService";

import {
  addGradebook,
  createGradebook,
  deleteGradebook,
  deleteGradebookSuccess,
  editGradebook,
  getGradebooks,
  setGradebooks,
  updateGradebook,
} from "./slice";

function* handleGetGradebooks({ payload }) {
  try {
    const gradebooks = yield call(gradebookService.getAll);
    yield put(setGradebooks(gradebooks));
  } catch (error) {
    console.log(error);
  }
}
function* handleDeleteGradebook({ payload }) {
  try {
    yield call(gradebookService.delete, payload);
    yield put(deleteGradebookSuccess(payload));
  } catch (error) {
    console.log(error);
  }
}

function* handleCreateGradebook({ payload }) {
  try {
    const newGradebook = yield call(gradebookService.add, payload.data);

    yield put(addGradebook(newGradebook));

    if (payload.meta?.onSuccess) {
      yield call(payload.meta.onSuccess, newGradebook);
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleEditGradebook({ payload }) {
  try {
    const gradebook = yield call(gradebookService.edit, payload.id, payload.data);

    yield put(updateGradebook(gradebook));

    if (payload.meta?.onSuccess) {
      yield call(payload.meta.onSuccess, gradebook);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetGradebooks() {
  yield takeLatest(getGradebooks.type, handleGetGradebooks);
}
export function* watchDeleteGradebook() {
  yield takeLatest(deleteGradebook.type, handleDeleteGradebook);
}
export function* watchCreateGradebook() {
  yield takeLatest(createGradebook.type, handleCreateGradebook);
}
export function* watchEditGradebook() {
  yield takeLatest(editGradebook.type, handleEditGradebook);
}
