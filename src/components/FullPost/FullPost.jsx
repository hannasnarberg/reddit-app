import React from 'react';
import { timeAgo } from '../../utils/timeAgo';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import './fullPost.css';

const FullPost = ({ currentPost }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className='headTitle'>{currentPost.title}</h1>
      <div className='postInfo'>
        <span className='subreddit'>{currentPost.subreddit_name_prefixed}</span>
        <span className='dot'> &#183; </span>
        <span>{currentPost.author}</span>
        <span className='dot'> &#183; </span>
        <span>{timeAgo(currentPost.created)}</span>
      </div>
      <ReactMarkdown>
        {currentPost.selftext.replace(/&amp;#x200B;/g, '')}
      </ReactMarkdown>
    </div>
  );
};

export default FullPost;
