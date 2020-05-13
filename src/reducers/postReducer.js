const INITIAL_STATE = {
  count: 0,
  loading: false,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
