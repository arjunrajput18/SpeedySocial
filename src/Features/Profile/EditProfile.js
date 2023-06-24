import React from "react";
import "./EditProfile.css";
import profile1 from "../../Assets/profile1.png";
import { useState } from "react";
import { useData } from "../../Context/DataContext";
import {
  editUserHandler,
  getUserData,
  postUserData,
} from "../../Services/DataServices";
import { toast } from "react-toastify";
import { AiFillCamera } from "react-icons/ai";

export const EditProfile = ({ setEditBtn, editBtn }) => {
  const {
    dataState: { users },
    dataDispatch,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken");
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const [updatedProfile, setUpdatedProfile] = useState({
    profilePic: loggedInUser.profilePic,
    firstName: loggedInUser.firstName,
    lastName:loggedInUser.lastName,
    link: loggedInUser.link,
    bio: loggedInUser.bio,
  });

  const handleClose = () => {
    setEditBtn(!editBtn);
  };

  //   console.log(loggedInUser)

  const avatars = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--L4LzR5aY8SMjeSy4NreBVChBQ71_KnRKw&usqp=CAU",
    "https://i0.wp.com/yumetwinsblog.wpcomstaging.com/wp-content/uploads/2021/12/be02b003-df4b-4fda-b6d7-0f6ad6c111f4_900px-363Spheal.png?fit=640%2C640&ssl=1",
    "https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png",
    "https://w0.peakpx.com/wallpaper/344/986/HD-wallpaper-ash-greninja-pokemon.jpg",
    "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    "https://w0.peakpx.com/wallpaper/204/837/HD-wallpaper-gengar-ghost-pokemon.jpg",
    "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/47148/article_aligned%402x.jpg",
    "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
  ];

  const handleImageUpload = (e) => {
    // console.log(e.target.value, "image")
    const selectedImg = e.target.files[0];
    setUpdatedProfile((prev) => ({ ...prev, profilePic: URL.createObjectURL(selectedImg) }))
  }

  const handleAvatar = (data) => {
  
    setUpdatedProfile((prev) => ({ ...prev, profilePic: data }));
  };

  const handleUpdate = () => {
    editUserHandler(updatedProfile, socialToken, dataDispatch);
    setEditBtn(!editBtn);
    toast.success("Post Updated!");
  };

  const updateDetails = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
    // console.log(updatedProfile);
  };

  const {firstName,lastName, link, bio } = updatedProfile;
  return (
    <div className="editMainContainer">
      <div className="editInnerConatainer">
        <div className="updateConatiner">
          <div>
            <p className="avatarinfo">Select Your Avatar</p>
            {/* <input type="file" /> */}
          </div>
          <div className="updateAvatarMain">
            <div className="updateAvatar">
              {avatars.map((data) => (
                <div
                  onClick={() => handleAvatar(data)}
                  className={`imgAvatar ${
                    updatedProfile.profilePic === data && "imgAvatarSelected"
                  }`}
                >
                  <img
                    src={data}
                    alt="img"
                    height={70}
                    width={70}
                    name="profilePic"
                    value={data}
                    onClick={updateDetails}
                  />
                </div>
              ))}
            </div>
            <div className="input-file-container flex align-center">
              <span className="profile-text">Profile</span>

              <label
                for="file-upload"
                className="btn-upload"
              >
                <img
                  src={updatedProfile.profilePic}
                  alt=""
                  width="200"
                  className="edit-profile-icon"
                />
                <span className="edit-profile-camera-icon">
                  <AiFillCamera />
                </span>
              </label>
              <input id="file-upload" type="file" onChange={handleImageUpload} />
            </div>
          </div>
          <div className="infoEditContainer">

         
          <label  className="labelUpdateProfile">First Name:
          <input
              type="text"
              name="firstName"
              onChange={updateDetails}
              value={firstName}
              className="inputp"
            />
          </label>
          <label  className="labelUpdateProfile">last Name:
          <input
              type="text"
              name="lastName"
              onChange={updateDetails}
              value={lastName}
              className="inputp"
            />
          </label>
          <label className="labelUpdateProfile">
            Link :
            <input
              type="text"
              name="link"
              onChange={updateDetails}
              value={link}
              className="inputp"
            />
          </label>
          <div className="labelUpdateProfile">
            <label className="labelUpdateProfile">Bio :</label>
            <textarea
              placeholder="bio"
              className="editPost-input"
              onChange={updateDetails}
              name="bio"
              value={bio}
            />
          </div>
          </div>
          <div className="btn-edit-profile-div">
            <button className="updateBtn" onClick={handleUpdate}>
              Update
            </button>
            <button onClick={handleClose} className="updateBtn">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
