const initialState = {
    posts: [],
    newPost: {
        id: null,
        name: "",
        content: "",
    },
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            // console.log(action)
            return {
                ...state,
                posts: action.posts,
            };
        case "CHANGE_CURRENT_POST":
            return {
                ...state,
                currentPost: action.post,
            };
        case "UPDATE_POSTS":
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.post.id) {
                        return action.post;
                    } else {
                        return post;
                    }
                }),
            };
        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => {
                    return !(post.id === action.post.id);
                }),
            };
        default:
            return state;
    }
};
export default postReducer;
