import React from 'react';
import './postFooter.css';
import { GoComment } from 'react-icons/go';
import { PiArrowFatUpLight } from 'react-icons/pi';
import { PiArrowFatDownLight } from 'react-icons/pi';

const PostFooter = ({ score, numComments, permalink }) => {
  return (
    <div className='post-footer'>
      <a
        className='link-to-post'
        href={'https://www.reddit.com' + permalink}
        target='_blank'
        rel='noreferrer'
      >
        Open in Reddit
      </a>
      <div className='stats'>
        <div>
          <PiArrowFatUpLight size={20} />
          <span>{score}</span>
          <PiArrowFatDownLight size={20} />
        </div>
        <div>
          <GoComment size={20} />
          <span>{numComments}</span>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
