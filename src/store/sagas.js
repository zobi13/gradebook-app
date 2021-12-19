import * as activeUserSagas from "./activeUser/sagas";
import * as gradebooksSagas from "./gradebooks/sagas";
import * as teachersSagas from "./teachers/sagas";

const sagas = {
  ...activeUserSagas,
  ...gradebooksSagas,
  ...teachersSagas,
};

export default sagas;
