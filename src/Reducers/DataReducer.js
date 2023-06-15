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
    case "BOOKMARK":return{
      ...state,users:state.users.map((data)=>data.username===action.payload.username?{...data,bookmarks:action.payload.bookmarks}:data)
    }
    default:
      return {
        state,
      };
  }
};
