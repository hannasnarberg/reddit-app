import React, { useEffect } from 'react';
import { timeAgo } from '../../utils/timeAgo';
import ReactMarkdown from 'react-markdown';
import './fullPost.css';

const FullPost = ({ currentPost }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!currentPost) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <header>
        <h1 className='head-title'>{currentPost.title}</h1>
        <div className='post-info'>
          <span className='subreddit'>
            {currentPost.subreddit_name_prefixed}
          </span>
          <span className='dot'> &#183; </span>
          <span>{currentPost.author}</span>
          <span className='dot'> &#183; </span>
          <time dateTime={currentPost.created}>
            {timeAgo(currentPost.created)}
          </time>
        </div>
      </header>
      <ReactMarkdown>
        {currentPost.selftext.replace(/&amp;#x200B;/g, '')}
      </ReactMarkdown>
    </article>
  );
};

export default FullPost;
