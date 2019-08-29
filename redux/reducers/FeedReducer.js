import {FEED} from "../Constants";

const initialState = {
    posts: [],
    stories: [],
    explore: []
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case FEED.POSTS.GET : {
            return {
              ...state,
              posts: [...state.posts,...action.payload]
            }
        }
      case FEED.STORIES.GET : {
          return {
            ...state,
            stories: [...action.payload]
          }
      }
      case FEED.EXPLORE.GET : {
        return {
          ...state,
          explore: [...state.explore,...action.payload]
        }
      }
        default:
            return state
    }
}

export default userReducer;
