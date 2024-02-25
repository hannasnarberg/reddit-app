import React from 'react';
import PostInList from '../postInList/PostInList';
import './postList.css';

const PostList = ({ category, posts, postLimit, setCurrentPost }) => {
  return (
    <div>
      <div className='feedTitle'>{'r/' + category}</div>
      <div className='feed'>
        {posts.children.slice(0, postLimit).map((post) => (
          <PostInList
            key={post.data.id}
            setCurrentPost={setCurrentPost}
            data={post.data}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
