import axios from "axios";

export const getPostData = async (dataDispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.get("/api/posts");
    if (status === 200 || status === 201) {
      dataDispatch({ type: "ALL_POST_DATA", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (dataDispatch) => {
  try {
    const {
      status,
      data: { users },
    } = await axios.get("/api/users");
    if (status === 200 || status === 201) {
      dataDispatch({ type: "ALL_USER_DATA", payload: users });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getlikeData = async (_id, dataDispatch, sociaToken) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${_id}`,
      {},
      {
        headers: {
          authorization: sociaToken,
        },
      }
    );
    if (status === 200 || status === 201) {
      // console.log(posts);
      dataDispatch({ type: "ALL_POST_DATA", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDislikeData = async (_id, dataDispatch, sociaToken) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/dislike/${_id}`,
      {},
      {
        headers: {
          authorization: sociaToken,
        },
      }
    );
    if (status === 200 || status === 201) {
      // console.log(posts);
      dataDispatch({ type: "ALL_POST_DATA", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookMark = async (dataDispatch, sociaToken, _id, username) => {
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
      `/api/users/bookmark/${_id}`,
      {},
      {
        headers: {
          authorization: sociaToken,
        },
      }
    );
    if (status === 200 || status === 201) {
      dataDispatch({ type: "BOOKMARK", payload: { username, bookmarks } });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRemoveBookmarkData = async (dataDispatch, sociaToken, _id, username) => {
  try {
    const {status,data:{bookmarks}} = await axios.post(
      `/api/users/remove-bookmark/${_id}`,
      {},
      {
        headers: {
          authorization: sociaToken,
        },
      }
    );
    // console.log(bookmarks)
    if (status === 200 || status === 201) {
      dataDispatch({ type: "BOOKMARK", payload: { username, bookmarks } });
    }
    // console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

export const getprofileData = async (id) => {
  try {
    const resp = await axios.get(`/api/users/${id}`);
    console.log("resp", resp);
  } catch (error) {
    console.log(error);
  }
};
