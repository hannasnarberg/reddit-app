import React from 'react';
import PostInFeed from './PostInFeed';
import Pagination from '../Pagination/Pagination';
import './Feed.css';

const Feed = ({
  category,
  posts,
  postLimit,
  getPosts,
  setCurrentPost,
  setPostLimit,
}) => {
  return (
    <div>
      <div className='feedTitle'>{'r/' + category}</div>
      {posts.children.slice(0, postLimit).map((post) => (
        <PostInFeed
          key={post.data.id}
          setCurrentPost={setCurrentPost}
          data={post.data}
        />
      ))}
      <Pagination
        getPrevious={() => getPosts('before', posts.before)}
        getNext={() => getPosts('after', posts.after)}
        setPostLimit={setPostLimit}
        postLimit={postLimit}
      />
    </div>
  );
};

export default Feed;
