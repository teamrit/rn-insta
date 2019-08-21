import {getRandomPosts} from "../../constants/DataGenerator";
import {FEED} from "../Constants";

export function loadRandomPosts() {
  return (dispatch, _) => {
    const posts = getRandomPosts() || [];
    dispatch({ type: FEED.POSTS.GET , payload: posts});
  };
}
