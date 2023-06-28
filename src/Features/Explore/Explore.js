import React, { useEffect } from 'react'
import { useData } from '../../Context/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';
import { useState } from 'react';

export const Explore = () => {
  const { dataState: { posts } ,setIsLoading} = useData();

  useEffect(()=>{
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  },[])

  // const [isLoading, setIsLoading] = useState(false);







  return (
    <div>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} data={post} />)
      }
    </div>
  )
}
