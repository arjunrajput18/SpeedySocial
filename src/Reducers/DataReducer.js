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
        const { userId, bookmarks } = action.payload;
      
        const updatedUsers = state.users.map((user) => {
          if (user._id === userId) {
            return {
              ...user,
              bookmarks: [...user.bookmarks, ...bookmarks],
            };
          }
          return user;
        });
      
        return {
          ...state,
          users: updatedUsers, 
        };

    default:
      return {
        state,
      };
  }
};
