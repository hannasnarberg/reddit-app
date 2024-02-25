import React from 'react';
import PostInFeed from './PostInFeed';
import './feed.css';

const Feed = ({ category, posts, postLimit, setCurrentPost }) => {
  return (
    <div>
      <div className='feedTitle'>{'r/' + category}</div>
      <div className='feed'>
        {posts.children.slice(0, postLimit).map((post) => (
          <PostInFeed
            key={post.data.id}
            setCurrentPost={setCurrentPost}
            data={post.data}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
