import React, { useState, useEffect, useCallback } from 'react';
import PostList from '../postList/PostList';
import Pagination from '../pagination/Pagination';
import fetchPosts from '../../fetchPosts';
import './feed.css';

const Feed = ({ currentCategory, setCurrentPost }) => {
  const [posts, setPosts] = useState(null);
  const [postLimit, setPostLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(
    async (page = 'current', id = '') => {
      try {
        const fetchedPosts = await fetchPosts(
          currentCategory,
          postLimit,
          page,
          id
        );
        setPosts(fetchedPosts.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching posts. Please try again later.');
        setLoading(false);
        console.error('Error fetching posts:', error);
      }
    },
    [currentCategory, postLimit]
  );

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [currentCategory, postLimit, getPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className='feed-title'>{`r/${currentCategory}`}</div>
      <PostList
        posts={posts}
        postLimit={postLimit}
        setCurrentPost={setCurrentPost}
      />
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
