import React from 'react';
import PostInList from '../postInList/PostInList';
import './postList.css';

const PostList = ({ posts, postLimit, setCurrentPost }) => {
  return (
    <div className='list'>
      {posts.children.slice(0, postLimit).map((post) => (
        <PostInList
          key={post.data.id}
          setCurrentPost={setCurrentPost}
          data={post.data}
        />
      ))}
    </div>
  );
};

export default PostList;
