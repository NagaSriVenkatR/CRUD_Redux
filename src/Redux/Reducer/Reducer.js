const initialState = {
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    location: "",
  },
  error: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    location: "",
  },
};
function formReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
        error: {
          ...state.error,
          [action.payload.field]: "", // Clear error when field is updated
        },
      };

    case "SET_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.error,
        },
      };

    default:
      return state;
  }
}

// Action creators
export const updateForm = (field, value) => ({
  type: "UPDATE_FORM",
  payload: { field, value },
});

export const setError = (field, error) => ({
  type: "SET_ERROR",
  payload: { field, error },
});

export default formReducer;

