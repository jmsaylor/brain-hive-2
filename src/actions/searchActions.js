import { CHANGE_SEARCH } from "./types";

export const changeSearch = (search, allPosts) => (dispatch) => {
  search = search.toLowerCase();

  const posts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().indexOf(search) >= 0 ||
      post.summary.toLowerCase().indexOf(search) >= 0 ||
      post.categories.join().toLowerCase().indexOf(search) >= 0
  );
  dispatch({
    type: CHANGE_SEARCH,
    payload: {
      search,
      list: [...posts],
    },
  });
};
