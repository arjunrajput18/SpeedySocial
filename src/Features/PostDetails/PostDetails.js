import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getPostDetails } from '../../Services/DataServices'
import { useData } from '../../Context/DataContext'
import { useState } from 'react'

export const PostDetails = () => {
  const {dataState:{postDeatils},dataDispatch}=useData()
  const [loading,setLoading]=useState(true)
    const {postId}=useParams()
    console.log(postId,"postId")

console.log(postDeatils)

    useEffect(()=>{
      getPostDetails(postId,dataDispatch)
    },[])
    console.log(postDeatils,"postDetails")
  return (
    <div>
   <SinglePost data={postDeatils}/> 
    </div>
  )
}
