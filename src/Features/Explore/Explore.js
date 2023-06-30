import React, { useEffect } from 'react'
import { useData } from '../../Context/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';

export const Explore = () => {
  const { dataState: { posts } ,setIsLoading,darkMode} = useData();

  useEffect(()=>{
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  },[])


  return (
    <div className={` home ${darkMode && "bgDarkmode"}`}>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} data={post} />)
      }
    </div>
  )
}
