import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getGradebooks() {},
  deleteGradebook() {},
  createGradebook() {},
  editGradebook() {},
};
const gradebooksSlice = createSlice({
  name: "gradebooks",
  initialState: {
    page: {
      data: [],
      current_page: 0,
    }, //{ data: [], current_page: 1}
    activeGradebookId: null,
  },
  reducers: {
    setGradebooks(state, action) {
      state.page = action.payload;
    },
    deleteGradebookSuccess(state, action) {
      state.page.data = state.page.data.filter(
        (gradebook) => gradebook.id !== action.payload
      );
    },
    setActiveGradebook(state, action) {
      state.activeGradebookId = action.payload;
    },

    addGradebook(state, action) {
      state.page.data.push(action.payload);
    },

    updateGradebook(state, action) {
      let gradebook = state.page.data.find(
        (gradebook) => gradebook.id == action.payload.id
      );
      Object.assign(gradebook, action.payload);
    },

    ...middlewareActions,
  },
});

export default gradebooksSlice.reducer;
export const {
  getGradebooks,
  setGradebooks,
  deleteGradebook,
  deleteGradebookSuccess,
  setActiveGradebook,
  createGradebook,
  editGradebook,
  addGradebook,
  updateGradebook,
} = gradebooksSlice.actions;
