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
export const editEntry = ( index, data ) => ({
  type: "EDIT_ENTRY",
  payload: { index, data },
});
export const setEditing = (isEditing) => ({
  type: "SET_EDITING",
  payload: isEditing,
});
export const deleteEntry = (index) => ({
  type: "DELETE_ENTRY",
  payload: index,
});
export const addEntry = (newEntry) => {
  return {
    type: "ADD_ENTRY",
    payload: newEntry,
  };
};
