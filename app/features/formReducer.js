export const UPDATE_FORM = "UPDATE_FORM";

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { id, value, isValid } = action.payload;
      const values = { ...state.values, [id]: value };
      const validities = { ...state.validities, [id]: isValid };

      let isFormValid = true;
      for (let key in validities) {
        isFormValid = isFormValid && validities[key];
      }

      return { ...state, values, validities, isFormValid };

    default:
      return state;
  }
};

export default formReducer;
