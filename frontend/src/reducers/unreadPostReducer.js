const initialState = {
    unreads: [],
};

const unreadReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add currentNotifaction to front of array to indicate it was newer
        case "ADD_CURRENT_UNREAD":
            return {
                ...state,
                currentUnreads: [action.post, ...state.currentUnreads],
            };
        case "DISMISS_UNREAD":
            return {
                ...state,
                unreads: state.unreads.filter((unread) => {
                    return !(unread.id === action.post.id);
                }),
            };
        case "DISMISS_ALL_UNREAD":
            return {
                ...state,
                unreads: state.unreads.filter((unread) => {
                    return !(unread.id === action.post.id);
                }),
            };
        default:
            return state;
    }
};
export default unreadReducer;
