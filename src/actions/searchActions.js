import { CHANGE_SEARCH } from "./types";

export const changeSearch = (search) => (dispatch) => {
  dispatch({
    type: CHANGE_SEARCH,
    payload: search,
  });
};
