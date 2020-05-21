import { CHANGE_SEARCH } from "../actions/types";

const INITIAL_STORE = {
  search: "",
  loading: false,
  errors: {},
  list: [],
};

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...store,
        search: action.payload.search,
        list: action.payload.list,
      };
    default:
      return store;
  }
};
