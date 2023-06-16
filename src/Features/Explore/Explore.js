import React from 'react'
import { useData } from '../../Context/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';

export const Explore = () => {
  const { dataState: { posts } } = useData();

  return (
    <div>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} data={post} />)
      }
    </div>
  )
}
