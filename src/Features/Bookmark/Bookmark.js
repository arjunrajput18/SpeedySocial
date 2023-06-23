import React from 'react'
import { useData } from '../../Context/DataContext'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import "./Bookmark.css"
export const Bookmark = () => {

const {dataState:{users,posts}}=useData()
const socialUser=JSON.parse(localStorage.getItem("socialUser"))

const loggedInUser=users?.find(({username})=>username===socialUser.username) 
const newBookmark=posts?.filter(({_id})=>loggedInUser?.bookmarks.includes(_id))

  return (
    <div>
    {newBookmark?.length > 0 ? (
      newBookmark.map((data) => <SinglePost data={data} key={data._id} />)
    ) : (
      <p className='bookmarke-heading'>No bookmarks available.</p>
    )}
  </div>
  )
}
