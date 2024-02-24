import React from 'react';
import { timeAgo } from './timeAgo';
import Markdown from 'markdown-to-jsx';

export const FullPost = ({ currentPost }) => {
  return (
    <div>
      <h1>{currentPost.title}</h1>
      <div>
        <span>{currentPost.author}</span>
        <span className='dot'> &#183; </span>
        <span>{timeAgo(currentPost.created)}</span>
      </div>
      <Markdown>{currentPost.selftext}</Markdown>
    </div>
  );
};

export default FullPost;