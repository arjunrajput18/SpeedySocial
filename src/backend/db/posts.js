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
    file:"https://media.istockphoto.com/id/1183357417/photo/chittorgarh-fort-chittorgarh-rajasthan-india.jpg?s=612x612&w=0&k=20&c=ON8eMw_8X9ue50nhgXmLuINMHTLzTgPD_DlV2CzvT8w=",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
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
  {
    _id:uuid(),
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
    file:"https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=600",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"arjunajput20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
