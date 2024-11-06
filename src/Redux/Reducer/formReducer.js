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

      // Generate a unique ID for the new entry
      const newEntry = {
        ...action.payload,
        id: Date.now(), // or use a library like uuid for generating IDs
      };

      return {
        ...state,
        submittedData: [...state.submittedData, newEntry],
      };

    case "SET_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.error,
        },
      };
    case "SET_EDITING":
      return {
        ...state,
        formData: {
          ...state.formData,
          isEditing: action.payload,
        },
      };
    case "SUBMIT_FORM_DATA":
      console.log("Submitted Data before edit:", state.submittedData);
      if (state.formData.isEditing) {
        const updatedData = [...state.submittedData];

        const editIndex = updatedData.findIndex(
          (entry) => entry.id === state.formData.id
        );
        if (editIndex !== -1 && updatedData[editIndex]) {
          // Update the existing entry with the new form data
          updatedData[editIndex] = {
            ...action.payload, // Ensure payload has the 'id'
            id: state.formData.id, // Preserve the existing ID when editing
          };
        }
        return {
          ...state,
          submittedData: updatedData,
          isEditing: false,
          formData: { ...initialState.formData }, // Reset form data
          error: {},
        };
      } else {
        // Add new entry with generated ID
        const newEntry = {
          ...action.payload,
          id: Date.now(), // Or use a more robust ID generation method like uuid
        };

        return {
          ...state,
          submittedData: [...state.submittedData, newEntry],
          formData: { ...initialState.formData }, // Reset form data
          error: {},
        };
      }

    case "EDIT_ENTRY":
      console.log("Submitted Data before edit:", state.submittedData);
      console.log(
        "Dispatching EDIT_ENTRY action with index:",
        action.payload.index
      );

      const entry = state.submittedData[action.payload.index];
      if (!entry) {
        console.error("No entry found at index:", action.payload.index);
        return state; // Return unchanged state if entry not found
      }
      return {
        ...state,
        formData: {
          ...entry,
          isEditing: true,
          id: entry.id, // Use actual ID from the entry
        },
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

