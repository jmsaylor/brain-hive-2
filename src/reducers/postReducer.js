import posts from "../mock/examplePosts";
import { INCREMENT, SUBMIT_FORM } from "../actions/types";

const INITIAL_STATE = {
  list: [...posts],
  count: 0,
  loading: false,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload,
      };
    case SUBMIT_FORM:
      const newPost = action.payload;
      newPost.id = state.list[state.list.length - 1].id + 1;
      return {
        ...state,
        list: [...state.list, newPost],
      };
    default:
      return state;
  }
};
