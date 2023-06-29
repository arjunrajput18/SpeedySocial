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
import { IoMdArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const EditProfile = ({ setEditBtn, editBtn }) => {
  const {
    dataState: { users },
    darkMode,
    dataDispatch,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken");
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const [updatedProfile, setUpdatedProfile] = useState({
    profilePic: loggedInUser.profilePic,
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    link: loggedInUser.link,
    bio: loggedInUser.bio,
  });

  const handleClose = () => {
    setEditBtn(!editBtn);
  };

  //   console.log(loggedInUser)

  const avatars = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--L4LzR5aY8SMjeSy4NreBVChBQ71_KnRKw&usqp=CAU",
    "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    "https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png",
    "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png",
    "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    "https://w0.peakpx.com/wallpaper/204/837/HD-wallpaper-gengar-ghost-pokemon.jpg",
    "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/47148/article_aligned%402x.jpg",
    "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
  ];

  const handleImageUpload = (e) => {
    // console.log(e.target.value, "image")
    const selectedImg = e.target.files[0];
    setUpdatedProfile((prev) => ({
      ...prev,
      profilePic: URL.createObjectURL(selectedImg),
    }));
  };

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

  const { firstName, lastName, link, bio } = updatedProfile;
  return (
    <div className={`editMainContainer ${darkMode && "bgDarkmode"}`}>
      <div className={`editInnerConatainer  ${darkMode && "bgDarkmode"}`}>
        <div className={`updateConatiner  ${darkMode && "bgDarkmode"}`}>
        <RxCross2
                  onClick={handleClose}
                  className={`cross-icon  ${darkMode && "bgDarkmode"} pointer`}
                />
          <div>
            <p className={`avatarinfo  ${darkMode && "bgSecondaryDarkMode"}`}>
              Select Your Avatar
            </p>
            {/* <input type="file" /> */}
          </div>

          <div className={`updateAvatarMain  ${darkMode && "bgDarkmode"}`}>
            <div className={`updateAvatar  ${darkMode && "bgDarkmode"}`}>
              {avatars.map((data) => (
                <div
                  onClick={() => handleAvatar(data)}
                  className={`imgAvatar ${
                    updatedProfile.profilePic === data && "imgAvatarSelected"
                  }  ${darkMode && "bgDarkmode"}`}
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
            <div
              className={`input-file-container flex align-center  ${
                darkMode && "bgDarkmode"
              }`}
            >
              <span className={`profile-text  ${darkMode && "bgDarkmode"}`}>
                Profile
              </span>

              <label
                for="file-upload"
                className={`btn-upload  ${darkMode && "bgDarkmode"}`}
              >
                <img
                  src={updatedProfile.profilePic}
                  alt=""
                  width="200"
                  className={`edit-profile-icon  ${darkMode && "bgDarkmode"}`}
                />
                <span
                  className={`edit-profile-camera-icon  `}
                >
                  <AiFillCamera />
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className={`infoEditContainer  ${darkMode && "bgDarkmode"}`}>
            <label className="labelUpdateProfile">
              First Name:
              <input
                type="text"
                name="firstName"
                onChange={updateDetails}
                value={firstName}
                className="inputp"
              />
            </label>
            <label className="labelUpdateProfile">
              last Name:
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
