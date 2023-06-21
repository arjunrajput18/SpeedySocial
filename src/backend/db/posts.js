import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
    _id:1,
    content:
      "continue ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "angelinaJolie@gmail.com",
      text: "Great post!"
    }],
    username: "ArjunsinghRajput@gmail.com",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"arjunajput20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
