import {getRandomPosts, getRandomStories} from "../../constants/DataGenerator";
import {FEED} from "../Constants";

export function loadRandomPosts() {
  return (dispatch, _) => {
    const posts = getRandomPosts() || [];
    dispatch({ type: FEED.POSTS.GET , payload: posts});
  };
}

export function loadRandomStories() {
  return (dispatch, _) => {
    const stories = getRandomStories() || [];
    dispatch({ type: FEED.STORIES.GET , payload: stories});
  };
}