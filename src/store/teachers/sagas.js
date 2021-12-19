import { put, takeLatest, call } from "@redux-saga/core/effects";
import teacherService from "../../services/TeacherService";

import {
  getTeachers,
  setTeachers,
} from "./slice";

function* handleGetTeachers({ payload }) {
  try {
    const teachers = yield call(teacherService.getAll);
    yield put(setTeachers(teachers));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetTeachers() {
  yield takeLatest(getTeachers.type, handleGetTeachers);
}
