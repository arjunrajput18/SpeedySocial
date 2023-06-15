import React from "react";
import "./FollowBar.css";
import profile1 from "../../Assets/profile1.png";
import profile2 from "../../Assets/profile2.png";
import { useData } from "../../Context/DataContext";
import { getprofileData } from "../../Services/DataServices";

export const FollowBar = () => {
  const {dataState:{users}}=useData()


const handleClick=(id)=>{

  console.log("clicked",id)
  getprofileData(id)

}


// const HandleFollow=()=>{
//   console.log("following")
// }

  return (
    <div className="main-followbar">
      <p className="followbar-heading">Suggested Users</p>
      <div className="FollowBar">
        <ul className="followBar-list">
        {users?.map(data=>
          <li className="followBar-list-item" key={data._id} onClick={()=>handleClick(data._id)}>
            <div className="profile-follow">
              <img src={profile1} alt="profile1" className="profileImg" />
              <div>
                <p className="user-follow-name">{data.firstName} {data.lastName}</p>
                <span className="userId">{data.username}</span>
              </div>
              <div>
                <button className="btn-follow" >+Follow</button>
              </div>
            </div>
      
            {/* <hr /> */}
          </li>)}
        </ul>
      </div>
    </div>
  );
};
