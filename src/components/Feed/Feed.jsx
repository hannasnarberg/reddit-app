import React from 'react';
import PostList from '../postList/PostList';
import Pagination from '../pagination/Pagination';
import { useState, useEffect, useCallback } from 'react';
import fetchPosts from '../../getPosts';

const Feed = ({ currentCategory, setCurrentPost }) => {
  const [posts, setPosts] = useState(null);
  const [postLimit, setPostLimit] = useState(10);

  const getPosts = useCallback(
    async (page = 'current', id = '') => {
      try {
        const postsData = await fetchPosts(
          currentCategory,
          postLimit,
          page,
          id
        );
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    [currentCategory, postLimit]
  );

  useEffect(() => {
    getPosts();
  }, [currentCategory, postLimit, getPosts]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostList
        category={currentCategory}
        posts={posts.data}
        postLimit={postLimit}
        setCurrentPost={setCurrentPost}
      />
      <Pagination
        getPrevious={() => getPosts('before', posts.before)}
        getNext={() => getPosts('after', posts.after)}
        setPostLimit={setPostLimit}
        postLimit={postLimit}
      />
    </>
  );
};

export default Feed;
