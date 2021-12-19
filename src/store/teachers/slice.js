import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getTeachers() {},
};
const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    page: {
      data: [],
      current_page: 0,
    }, // { data: [], current_page: 1}
    activeTeacherId: null,
  },
  reducers: {
    setTeachers(state, action) {
      state.page = action.payload;
    },
    setActiveTeacher(state, action) {
      state.activeTeacherId = action.payload;
    },

    ...middlewareActions,
  },
});

export default teachersSlice.reducer;
export const {
  getTeachers,
  setTeachers,
} = teachersSlice.actions;
