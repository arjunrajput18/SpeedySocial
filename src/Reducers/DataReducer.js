export const initialState = {
  posts: [],
  users: [],
  postId: null,
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
    case "REMOVE_FOLLOWER":
      return {
        ...state,
        users: state.users.map((el) =>
          el.username === action.payload.unfollowedUser.username
            ? {
                ...el,
                followers: action.payload.unfollowedUser.followers,
              }
            : el
        ),
      };
    case "POST_OPERATIONS":
      return {
        ...state,
        posts: action.payload,
      };

    case "Add_NEW_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "USER_OPERATIONS":
      return {
        ...state,
        users: state.users.map((user) =>
          action.payload.username === user.username ? action.payload : user
        ),
      };
    case "FOLLOWING_OPERATIONS":
      return {
        ...state,
        users: state?.users?.map((el) =>
          el.username === action.payload.user?.username
            ? { ...el, following: action.payload?.user?.following }
            : el
        ),
      };

    case "EDIT_POST":
      return {
        ...state,
        postId: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
