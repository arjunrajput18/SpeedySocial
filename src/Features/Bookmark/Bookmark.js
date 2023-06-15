import React from 'react'
import { useData } from '../../Context/DataContext'
import { SinglePost } from '../../Components/SinglePost/SinglePost'

export const Bookmark = () => {

const {dataState:{users,posts}}=useData()
const socialUser=JSON.parse(localStorage.getItem("socialUser"))

const loggedInUser=users?.find(({_id})=>_id===socialUser._id)
// console.log(bookmarksdata,"booooo")
const newBookmark=posts?.filter(({_id})=>loggedInUser?.bookmarks.includes(_id))
// console.log(newBookmark,"newww") 
  return (
    <div>
  {newBookmark?.map((data)=><SinglePost data={data} key={data._id}/>)}
    </div>
  )
}
