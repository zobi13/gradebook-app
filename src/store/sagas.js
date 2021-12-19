import * as gradebooksSagas from "./gradebooks/sagas";
import * as authSagas from "./auth/sagas";

const sagas = {
  ...gradebooksSagas,
  ...authSagas,
};

export default sagas;
