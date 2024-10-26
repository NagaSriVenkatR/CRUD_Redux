export const updateForm = (field, value) => ({
  type: "UPDATE_FORM",
  payload: { field, value },
});

export const setError = (field, error) => ({
  type: "SET_ERROR",
  payload: { field, error },
});
export const submitFormData = (data) => ({
  type: "SUBMIT_FORM_DATA",
  payload: data,
});
export const editEntry = (index, data) => ({
  type: "EDIT_ENTRY",
  payload: { index, data },
});

export const deleteEntry = (index) => ({
  type: "DELETE_ENTRY",
  payload: index,
});
