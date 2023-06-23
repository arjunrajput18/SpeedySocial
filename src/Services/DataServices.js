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
export const editUserHandler = async (userData, socialToken, dataDispatch) => {
  try {
    const {
      status,
      data: { user },
    } = await axios.post(
      "/api/users/edit",
      { userData },
      {
        headers: {
          authorization: socialToken,
        },
      }
    );
    console.log(user);
    if (status === 200 || status === 201) {
      dataDispatch({ type: "USER_OPERATIONS", payload: user });
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
      console.log(posts, "postttt");
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
      console.log(posts, "postttt");
      dataDispatch({ type: "ALL_POST_DATA", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookMark = async (dataDispatch, sociaToken, _id, username) => {
  console.log({  dataDispatch,
    sociaToken,
    _id,
    username})
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
      // console.log(bookmarks)
      dataDispatch({ type: "BOOKMARK", payload: { username, bookmarks } });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRemoveBookmarkData = async (
  dataDispatch,
  sociaToken,
  _id,
  username
) => {
  console.log({  dataDispatch,
    sociaToken,
    _id,
    username})
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
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

export const getFollowHandler = async (
  followUserId,
  socialToken,
  dataDispatch
) => {
  try {
    const {
      status,
      data: { user, followUser },
    } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: socialToken,
        },
      }
    );
    if (status === 200 || status === 201) {
      dataDispatch({ type: "ADD_FOLLOWING", payload: { user: user } });
      dataDispatch({
        type: "ADD_FOLLOWER",
        payload: { followUser: followUser },
      });
      localStorage.setItem("socialUser", JSON.stringify(user));
    }
    // console.log(followUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUnfollowHandler = async (
  followUserId,
  socialToken,
  dataDispatch
) => {
  try {
    const {
      status,
      data: { user, followUser },
    } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: {
          authorization: socialToken,
        },
      }
    );
    if (status === 200 || status === 201) {
      // dataDispatch({ type: "REMOVE_FOLLOWER", payload: { user: user } });
      dataDispatch({
        type: "REMOVE_FOLLOWER",
        payload: { unfollowedUser: followUser },
      });
      localStorage.setItem("socialUser", JSON.stringify(user));
    }
  } catch (error) {
    console.log(error);
  }
};

export const createPostHandler = async (
  postData,
  socialToken,
  dataDispatch
) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/`,
      { postData },
      {
        headers: {
          authorization: socialToken,
        },
      }
    );
    if (status === 200 || status === 201) {
      console.log({posts});
      dataDispatch({ type: "POST_OPERATIONS", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetails = async (postId, dataDispatch) => {
  console.log(postId, "fff");

  try {
    const {
      status,
      data: { post },
    } = await axios.get(`/api/posts/${postId}`);
    if (status === 200 || status === 201) {
      console.log(post);
      dataDispatch({ type: "POST_DETAILS", payload: post });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addCommentHandle = async (
  postId,
  commentData,
  socialToken,
  dataDispatch
) => {

  console.log({  postId,
    commentData,
    socialToken,
    dataDispatch})
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/comments/add/${postId}`,
      {
        commentData,
      },
      {
        headers: {
          authorization: socialToken,
        },
      }
    );

    if (status === 200 || status === 201) {
      console.log(posts);
      dataDispatch({ type: "POST_OPERATIONS", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommentHandle = async (
  postId,commentId,
  commentData,
  socialToken,
  dataDispatch
) => {

  console.log({  postId,commentId,
    commentData,
    socialToken,
    dataDispatch})
  try {
    const {
      status,
      data: { posts },
    } = await axios.delete(
      `/api/comments/delete/${postId}/${commentId}`,
    
      {
        headers: {
          authorization: socialToken,
        },
      }
    );

    console.log(posts);
    if (status === 200 || status === 201) {
      dataDispatch({ type: "POST_OPERATIONS", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePostHandle = async (_id, dataDispatch, socialToken) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.delete(`/api/posts/${_id}`, {
      headers: {
        authorization: socialToken,
      },
    });
    if (status === 200 || status === 201) {
      console.log(posts);
      dataDispatch({ type: "POST_OPERATIONS", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editPostHandler= async (
  postId,
  postDetails,
  dataDispatch,
  socialToken
) => {
  console.log(postDetails,postId);
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/edit/${postId}`,
      {postData:postDetails},
      {
        headers: {
          authorization: socialToken,
        },
      }
    );
    if (status === 200 || status === 201) {
      console.log(posts, "posssssssssssss");
      dataDispatch({ type: "POST_OPERATIONS", payload: posts });
    }
    // console.log(resp)
  } catch (error) {
    console.log(error);
  }
};
