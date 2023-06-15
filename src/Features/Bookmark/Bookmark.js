import React from 'react'
import { useData } from '../../Context/DataContext'
import { SinglePost } from '../../Components/SinglePost/SinglePost'

export const Bookmark = () => {

const {dataState:{users,posts}}=useData()
const socialUser=JSON.parse(localStorage.getItem("socialUser"))

const bookmarksdata=users?.find(({_id})=>_id===socialUser._id)
const newBookmark=posts?.filter(({_id})=>bookmarksdata?.bookmarks.some((data)=>data===_id))
// console.log(newBookmark) 
  return (
    <div>
  {newBookmark?.map((data)=><SinglePost data={data}/>)}
    </div>
  )
}
