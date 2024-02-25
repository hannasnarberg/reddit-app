import React from 'react';
import PostInFeed from './PostInFeed';
import Pagination from '../Pagination/Pagination';

const Feed = ({ posts, postLimit, getPosts, setCurrentPost, setPostLimit }) => {
  return (
    <div>
      {posts.children.slice(0, postLimit).map((post) => (
        <PostInFeed setCurrentPost={setCurrentPost} data={post.data} />
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
