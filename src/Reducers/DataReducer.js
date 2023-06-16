export const initialState = {
  posts: [],
  users: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_POST_DATA":
      return {
        ...state,
        posts: action.payload,
      };

    case "ALL_USER_DATA":
      return {
        ...state,
        users: action.payload,
      };
    case "BOOKMARK":
      return {
        ...state,
        users: state.users.map((data) =>
          data.username === action.payload.username
            ? { ...data, bookmarks: action.payload.bookmarks }
            : data
        ),
      };

    case "ADD_FOLLOWER":
      return {
        ...state,
        users: state.users.map((data) =>
          data.username === action.payload.followUser.username
            ? { ...data, followers: action.payload.followUser.followers }
            : data
        ),
      };

    case "ADD_FOLLOWING":
      return {
        ...state,
        users: state.users.map((data) =>
          data.username === action.payload.user.username
            ? { ...data, following: action.payload.user.following }
            : data
        ),
      };
      case "POST_OPERATIONS": return {
        ...state, posts: action.payload
      }
  
    default:
      return {
        state,
      };
  }
};
