import React, { useEffect } from 'react'
import { useData } from '../../Context/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';
import { useState } from 'react';

export const Explore = () => {
  const { dataState: { posts } ,setIsLoading,setPage,isLoading} = useData();

  // useEffect(()=>{
  //   window.scrollTo(0, 0)
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 300)
  // },[])

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight + 2 >= scrollHeight && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };





  return (
    <div>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} data={post} />)
      }
    </div>
  )
}
