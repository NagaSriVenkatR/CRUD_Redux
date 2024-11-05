const initialState = {
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    location: "",
    isEditing: false, // New flag to track editing mode
    id: null,
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
  submittedData: [],
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
    case "ADD_ENTRY":
      if (state.formData.isEditing) return state;
      return {
        ...state,
        submittedData: [...state.submittedData, action.payload],
      };

    case "SET_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.error,
        },
      };
    case "SUBMIT_FORM_DATA":
      return {
        ...state,
        submittedData: [...state.submittedData, action.payload],
        formData: { ...initialState.formData }, // Reset form data
        error: {},
      };
    case "EDIT_ENTRY":
      const updatedList = [...state.submittedData];
      updatedList[action.payload.index] = action.payload.data;
      return {
        ...state,
        submittedData: updatedList,
      };

    case "DELETE_ENTRY":
      return {
        ...state,
        submittedData: state.submittedData.filter(
          (_, i) => i !== action.payload
        ),
      };

    default:
      return state;
  }
}
export default formReducer;

