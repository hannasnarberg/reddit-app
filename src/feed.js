import React from 'react';
import { Post } from './post';
import { useState } from 'react';
import Pagination from './pagination';

export const Feed = ({
  posts,
  postLimit,
  getPosts,
  setCurrentPost,
  setPostLimit,
}) => {
  return (
    <div>
      {posts.children.slice(0, postLimit).map((post) => (
        <Post setCurrentPost={setCurrentPost} data={post.data} />
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
