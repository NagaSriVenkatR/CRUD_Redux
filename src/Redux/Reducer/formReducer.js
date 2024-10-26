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
  formDataList: []
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
    case "SUBMIT_FORM_DATA":
      return {
        ...state,
        formDataList: [...state.formDataList, action.payload],
      };
    case "EDIT_ENTRY":
      const updatedList = [...state.formDataList];
      updatedList[action.payload.index] = action.payload.data;
      return {
        ...state,
        formDataList: updatedList,
      };

    case "DELETE_ENTRY":
      return {
        ...state,
        formDataList: state.formDataList.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
}
export default formReducer;

