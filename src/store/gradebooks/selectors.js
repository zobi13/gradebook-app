export function selectGradebooks(state) {
  return state.gradebooks.page;
}

export function selectActiveGradebook(state) {
  return state.gradebooks.page.data.find(
    (gradebook) => gradebook.id == state.gradebooks.activeGradebookId
  );
}
