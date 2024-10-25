export const updateForm = (field, value) => ({
  type: "UPDATE_FORM",
  payload: { field, value },
});

export const setError = (field, error) => ({
  type: "SET_ERROR",
  payload: { field, error },
});
