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
      "The Chittorgarh, also known as Chittod Fort, is one of the largest forts in India. It is a UNESCO World Heritage Site ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "mickeymouse@gmail.com",
      text: "Great post!"
    }],
    username: "ArjunsinghRajput@gmail.com",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"arjunajput20",
    file:"https://e1.pxfuel.com/desktop-wallpaper/196/963/desktop-wallpaper-chittorgarh-fort-chittorgarh.jpg",
    createdAt:new Date(2020, 5, 25, 12, 0, 0),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Playing new Car game",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://thumbs.gfycat.com/BelatedFatalAgama-size_restricted.gif",
    comments:[  {
      _id: uuid(),
      username: "donaldduck@gmail.com",
      text: "Great post!"
    }],
    username: "ArjunsinghRajput@gmail.com",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"arjunajput20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // {
  //   _id:uuid(),
  //   content:
  //     "continue ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   file:"https://media.tenor.com/PLqmB_SmXQMAAAAM/clouds-sky.gif",
  //   comments:[  {
  //     _id: uuid(),
  //     username: "donaldduck@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "ArjunsinghRajput@gmail.com",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"arjunajput20",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "continue ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   file:"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdxN3N0ODYzbG5xeml3bTlvNnFmMWl5eXc3dWN0YndqOWJyb2s4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduYJ5WzNGsAadKU/giphy.gif",
  //   comments:[  {
  //     _id: uuid(),
  //     username: "donaldduck@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "ArjunsinghRajput@gmail.com",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"arjunajput20",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Mountains 🔥 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "spongebob@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "ArjunsinghRajput@gmail.com",
  //   file:"https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"arjunajput20",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "spongebob@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "ArjunsinghRajput@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"arjunajput20",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "This is a beautiful image of an amazing Nature💖 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "spongebob@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "ArjunsinghRajput@gmail.com",
  //   file:"https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"arjunajput20",
  //   createdAt: new Date(2020, 5, 25, 16, 30),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "My New Car🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Birthday Gift from friend ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://images.pexels.com/photos/999068/pexels-photo-999068.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id:uuid(),
  //   content:
  //     "Be Like Water🌊 ",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   comments:[  {
  //     _id: uuid(),
  //     username: "bugsbunny@gmail.com",
  //     text: "Great post!"
  //   }],
  //   username: "spongebob@gmail.com",
  //   file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
  //   profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
  //   userHandler:"spongeBob123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },


];
