import {FEED} from "../Constants";

const initialState = {
    posts: []
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case FEED.POSTS.GET : {
            return {
                posts: [...initialState.posts, action.payload]
            }
        }
        default:
            return state
    }
}

export default userReducer;
