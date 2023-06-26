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
    userHandler: "arjunrajput20",
    profilePic:"https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    link:"https://arjunsinghportfolio.netlify.app",
    bio:"An aspiring web developer1",
    bookmarks: [],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 2,
    firstName: "mickey ",
    lastName: "Kouse",
    username: "mickeymouse@gmail.com",
    password: "mickeykouse123",
    userHandler: "mickeykouse123",
    profilePic: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
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
    profilePic: "https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-182458,msid-58980271/some-fun-facts-about-disneys-most-popular-character-donald-duck.jpg?from=mdr",
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
    profilePic: "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
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
    firstName: "Min",
    lastName: "Mouse",
    username: "minniemouse@gmail.com",
    password: "minnieMouse123",
    profilePic: "https://img.favpng.com/13/15/19/jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-png-favpng-fKs3cdqFhSJqTx45uP9eX8RBE.jpg",
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
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-wvAgEJiLLvKRlUi57WGY-gabfWao8R4E0_gKmezpb8Lu_ptwXwNlZSeXkgcNAkW9tA&usqp=CAU",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: 9,
    firstName: "Tom",
    lastName: "Cat",
    username: "tomcat@gmail.com",
    password: "tomCat123",
    userHandler: "tomCat123",
    bookmarks: [],
    followers: [],
    profilePic: "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png",
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
  
 
];