export const initialState = {
  posts: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_POST_DATA":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
