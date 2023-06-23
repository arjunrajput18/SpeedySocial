import React from 'react'
import "./CommentBox.css"
import { useData } from '../../Context/DataContext'
import { addCommentHandle } from '../../Services/DataServices'
import { BiArrowBack } from 'react-icons/bi'

export const CommentBox = () => {

const {commentToggle,setCommentToggle,commentText, setCommentText,dataDispatch,commentId}=useData()

const socialToken = localStorage.getItem("socialToken");
// const socialUser = JSON.parse(localStorage.getItem("socialUser"));
console.log("commentbox",commentId,commentText)
const handleAddComment = () => {
    if (commentText) {
      // console.log(_id, commentText, socialToken, dataDispatch);
    const postid=commentId
      addCommentHandle(postid, commentText, socialToken, dataDispatch);
      setCommentText("")
      setCommentToggle(!commentToggle)
    }
  };

  const handleBack=()=>{
    setCommentToggle(!commentToggle)
  }
  return (
    <div className='mainCommentBox'> <div className="comment-box positionComment">
 <div className="inner-comment-box">
 <div><BiArrowBack  className="logo-back-addPost" onClick={handleBack}/></div>
      <input
        placeholder="write your comment"
        className="single-profile-input-ccomment"
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
      />
      <button className="post-btn-comment cmntBtn" onClick={handleAddComment}>
        COMMENT
      </button>
    </div>
  </div></div>
  )
}
