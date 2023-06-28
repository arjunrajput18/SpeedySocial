import React from 'react'

import { useParams } from 'react-router-dom'
import { useData } from '../../Context/DataContext'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { useEffect } from 'react'



export const PostDetails = () => {
  const {dataState:{posts}}=useData()
    const {_id}=useParams()

    const {setIsLoading} = useData();

    useEffect(()=>{
      // window.scrollTo(1, 0)
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    },[])
  
const postDeatils=posts?.find((post)=>post.id.toString()===_id.toString())

  return (
    <div>
    <SinglePost data={postDeatils} showComment/>
    </div>
  )
}