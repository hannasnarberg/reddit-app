import React, { useEffect } from 'react';
import { timeAgo } from '../../utils/timeAgo';
import ReactMarkdown from 'react-markdown';
import './fullPost.css';
import PostFooter from '../postFooter/PostFooter';

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
      <hr />
      <ReactMarkdown>
        {currentPost.selftext.replace(/&amp;#x200B;/g, '')}
      </ReactMarkdown>
      <div className='full-post-footer'>
        <PostFooter currentPost={currentPost} />
      </div>
    </article>
  );
};

export default FullPost;
