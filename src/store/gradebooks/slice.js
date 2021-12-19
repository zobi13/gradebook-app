import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getGradebooks() {},
  createGradebooks() {},
  getGradebooks() {},
};

const gradebooksSlice = createSlice({
  name: "gradebooks",
  initialState: {
    page: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
    selectedGradebook: null,
  },
  reducers: {
    setGradebooks(state, action) {
      state.page = action.payload;
    },
    setGradebook(state, action) {
      state.selectedMovie = action.payload;
    },
    ...middlewareActions,
  },
});

export default gradebooksSlice.reducer;

export const { getGradebooks, setGradebooks, createGradebook, getGradebook, setGradebook } =
  gradebooksSlice.actions;
