import React from 'react';
import './postFooter.css';
import { GoComment } from 'react-icons/go';
import { PiArrowFatUpLight } from 'react-icons/pi';
import { PiArrowFatDownLight } from 'react-icons/pi';

const PostFooter = ({ currentPost }) => {
  return (
    <div className='post-footer'>
      <a
        className='link-to-post'
        href={'https://www.reddit.com' + currentPost.permalink}
        target='_blank'
        rel='noreferrer'
      >
        Open in Reddit
      </a>
      <div className='stats'>
        <div>
          <PiArrowFatUpLight size={20} />
          <span>{currentPost.score}</span>
          <PiArrowFatDownLight size={20} />
        </div>
        <div>
          <GoComment size={20} />
          <span>{currentPost.num_comments}</span>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
