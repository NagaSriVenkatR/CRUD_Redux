export const updateForm = (field, value) => ({
  type: "UPDATE_FORM",
  payload: { field, value },
});

export const setError = (field, error) => ({
  type: "SET_ERROR",
  payload: { field, error },
});
export const submitFormData = (formData) => ({
  type: "SUBMIT_FORM_DATA",
  payload: formData,
});
export const editEntry = ( id, updatedData ) => ({
  type: "EDIT_ENTRY",
  payload: { id, updatedData },
});
export const setEditing = (isEditing) => ({
  type: "SET_EDITING",
  payload: isEditing,
});
export const deleteEntry = (index) => ({
  type: "DELETE_ENTRY",
  payload: index,
});
