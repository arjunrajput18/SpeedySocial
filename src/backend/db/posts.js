import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id:uuid(),
    content:
      "The best way to predict the future is to create it. - Peter Drucker",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika@gmail.com",
    userHandler:"adarshbalika24",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni@gmail.com",
    userHandler:"shubhamsoni12",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Be yourself; everyone else is already taken",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "leonardodicaprio@gmail.com",
    userHandler:"leonardoDiCaprio123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
