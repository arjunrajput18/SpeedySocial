export const initialState = {
  posts: [],
  users: [],
  postDeatils:{}
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
      case "REMOVE_FOLLOWER": return {
        ...state, users: state.users.map(el => el.username === action.payload.unfollowedUser.username ? {
          ...el, followers: action.payload.unfollowedUser.followers
        } : el)
      }
      case "POST_OPERATIONS": return {
        ...state, posts: action.payload
      }


      case "Add_NEW_USER":return{
        ...state,users:[...state.users,action.payload]
      }
      case "POST_DETAILS":return{
        ...state,postDeatils:action.payload
      }
    default:
      return {
        state,
      };
  }
};
