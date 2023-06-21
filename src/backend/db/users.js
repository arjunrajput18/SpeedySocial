import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Arjun",
    lastName: "Rajput",
    username: "ArjunsinghRajput@gmail.com",
    password: "123",
    userHandler: "arjunajput20",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    link:"https://arjunsinghportfolio.netlify.app",
    bio:"An aspiring web developer1",
    bookmarks: [],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mickey",
    lastName: "Mouse",
    username: "mickeymouse@gmail.com",
    password: "mickeyMouse123",
    userHandler: "mickeyMouse123",
    profilePic: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/47148/article_aligned%402x.jpg",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Donald",
    lastName: "Duck",
    username: "donaldduck@gmail.com",
    password: "donaldDuck123",
    userHandler: "donaldDuck123",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--L4LzR5aY8SMjeSy4NreBVChBQ71_KnRKw&usqp=CAU",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Sponge",
    lastName: "Bob",
    username: "spongebob@gmail.com",
    password: "spongeBob123",
    userHandler: "spongeBob123",
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Bugs",
    lastName: "Bunny",
    username: "bugsbunny@gmail.com",
    profilePic: "https://i0.wp.com/yumetwinsblog.wpcomstaging.com/wp-content/uploads/2021/12/be02b003-df4b-4fda-b6d7-0f6ad6c111f4_900px-363Spheal.png?fit=640%2C640&ssl=1",
    password: "bugsBunny123",
    userHandler: "bugsBunny123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Minnie",
    lastName: "Mouse",
    username: "minniemouse@gmail.com",
    password: "minnieMouse123",
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    userHandler: "minnieMouse123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Dora",
    lastName: "Explorer",
    username: "doraexplorer@gmail.com",
    password: "doraExplorer123",
    userHandler: "doraExplorer123",
    bookmarks: [],
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Tom",
    lastName: "Cat",
    username: "tomcat@gmail.com",
    password: "tomCat123",
    userHandler: "tomCat123",
    bookmarks: [],
    followers: [],
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
  
 
];
