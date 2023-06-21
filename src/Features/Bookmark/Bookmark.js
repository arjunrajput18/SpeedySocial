import React from 'react'
import { useData } from '../../Context/DataContext'
import { SinglePost } from '../../Components/SinglePost/SinglePost'

export const Bookmark = () => {

const {dataState:{users,posts}}=useData()
const socialUser=JSON.parse(localStorage.getItem("socialUser"))

const loggedInUser=users?.find(({username})=>username===socialUser.username) 
const newBookmark=posts?.filter(({_id})=>loggedInUser?.bookmarks.includes(_id))

  return (
    <div >
  {newBookmark?.map((data)=><SinglePost data={data} key={data._id}/>)}
    </div>
  )
}
