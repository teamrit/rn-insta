import {FEED} from "../Constants";

const initialState = {
    posts: [],
    stories: []
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case FEED.POSTS.GET : {
            return {
              ...state,
              posts: [...initialState.posts, ...action.payload]
            }
        }
      case FEED.STORIES.GET : {
          return {
            ...state,
            stories: [...action.payload]
          }
      }
        default:
            return state
    }
}

export default userReducer;
