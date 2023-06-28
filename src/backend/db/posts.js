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
      likeCount: 3,
      likedBy: [
      {
        _id: 2,
        firstName: "Mic",
        lastName: "Mouse",
        username: "mickeymouse@gmail.com",
        password: "mickeyMouse123",
        userHandler: "mickeyMouse123",
        profilePic: "https://img.favpng.com/13/15/19/jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-png-favpng-fKs3cdqFhSJqTx45uP9eX8RBE.jpg",
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
        profilePic: "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(),
        updatedAt: formatDate()
      }],
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
    createdAt:new Date(2022, 11, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "A Building With A Rooftop Balcony. location :Leicester, England, United Kingdom      ",
    likes: {
      likeCount: 4,
      likedBy: [
      {
        _id: 2,
        firstName: "Mic",
        lastName: "Mouse",
        username: "mickeymouse@gmail.com",
        password: "mickeyMouse123",
        userHandler: "mickeyMouse123",
        profilePic: "https://img.favpng.com/13/15/19/jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-png-favpng-fKs3cdqFhSJqTx45uP9eX8RBE.jpg",
        link: "",
        bio: "",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(),
        updatedAt: formatDate()
      },{
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
        profilePic: "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(),
        updatedAt: formatDate()
      }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "mickeymouse@gmail.com",
      text: "Great post!"
    },{
      _id: uuid(),
      username: "spongebob@gmail.com",
      text: "Wow!"
    }
    
  
  ],
    username: "ArjunsinghRajput@gmail.com",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"arjunajput20",
    file:"https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdAt:new Date(2023, 1, 9, 11, 10, 18),
    updatedAt: formatDate(),
  }
  ,{
    _id:uuid(),
    content:
      "Fort💖 ",
    likes: {
      likeCount: 2,
      likedBy: [
      {
        _id: 2,
        firstName: "Mic",
        lastName: "Mouse",
        username: "mickeymouse@gmail.com",
        password: "mickeyMouse123",
        userHandler: "mickeyMouse123",
        profilePic: "https://img.favpng.com/13/15/19/jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-png-favpng-fKs3cdqFhSJqTx45uP9eX8RBE.jpg",
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
     ],
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
    file:"https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg?auto=compress&cs=tinysrgb&w=400",
    createdAt:new Date(2023, 5, 18, 12, 8, 15),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Playing new Car game",
    likes: {
      likeCount: 1,
      likedBy: [
      {
        _id: 2,
        firstName: "Mic",
        lastName: "Mouse",
        username: "mickeymouse@gmail.com",
        password: "mickeyMouse123",
        userHandler: "mickeyMouse123",
        profilePic: "https://img.favpng.com/13/15/19/jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-png-favpng-fKs3cdqFhSJqTx45uP9eX8RBE.jpg",
        link: "",
        bio: "",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(),
        updatedAt: formatDate()
      }],
      dislikedBy: [],
    },
    file:"https://thumbs.gfycat.com/BelatedFatalAgama-size_restricted.gif",
    comments:[  {
      _id: uuid(),
      username: "donaldduck@gmail.com",
      text: "Great post!"
    }],
    username: "doraexplorer@gmail.com",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"doraExplorer123",
    createdAt: new Date(2021, 5, 25, 12, 0, 0),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Clouds🔥",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://media.tenor.com/PLqmB_SmXQMAAAAM/clouds-sky.gif",
    comments:[  {
      _id: uuid(),
      username: "donaldduck@gmail.com",
      text: "Great post!"
    }],
    username: "bugsbunny@gmail.com",
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
    file:"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdxN3N0ODYzbG5xeml3bTlvNnFmMWl5eXc3dWN0YndqOWJyb2s4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduYJ5WzNGsAadKU/giphy.gif",
    comments:[  {
      _id: uuid(),
      username: "donaldduck@gmail.com",
      text: "Great post!"
    }],
    username: "donaldduck@gmail.com",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"donaldDuck123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Mountains 🔥 ",
    likes: {
      likeCount: 1,
      likedBy: [  {
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
      }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "spongebob@gmail.com",
      text: "Great post!"
    }],
    username: "minniemouse@gmail.com",
    file:"https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=600",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"minnieMouse123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Be Like Water🌊 ",
    likes: {
      likeCount: 1,
      likedBy: [{
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
      }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "spongebob@gmail.com",
      text: "Great post!"
    }],
    username: "donaldduck@gmail.com",
    file:"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"donaldDuck123",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },{
    _id:uuid(),
    content:
      "Be Like Water🌊 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "spongebob@gmail.com",
      text: "Great post!"
    }],
    username: "bugsbunny@gmail.com",
    file:"https://images.pexels.com/photos/16500107/pexels-photo-16500107/free-photo-of-sunrise-over-the-boats-in-the-harbor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"bugsBunny123",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "This is a beautiful image of an amazing Nature💖 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "spongebob@gmail.com",
      text: "Great post!"
    }],
    username: "tomcat@gmail.com",
    file:"https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    profilePic:"https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png",
    userHandler:"tomCat123",
    createdAt: new Date(2020, 5, 25, 16, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Be Like Water🌊 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "bugsbunny@gmail.com",
      text: "Great post!"
    }],
    username: "spongebob@gmail.com",
    file:"https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"spongeBob123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id:uuid(),
    content:
      "Be Like Water🌊 ",
    likes: {
      likeCount: 2,
      likedBy: [{
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
      }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "bugsbunny@gmail.com",
      text: "Great post!"
    }],
    username: "mickeymouse@gmail.com",
    file:"https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    profilePic:"https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler:"mickeyMouse123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  

];
