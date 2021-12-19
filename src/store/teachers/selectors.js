export function selectTeachers(state) {
  return state.teachers.page;
}

export function selectActiveTeacher(state) {
  return state.teachers.page.data.find(
    (teacher) => teacher.id == state.teachers.activeTeacherId
  );
}
