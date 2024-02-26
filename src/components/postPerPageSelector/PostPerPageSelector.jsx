import React from 'react';
import './postPerPageSelector.css';

const PostPerPageSelector = ({ postLimit, setPostLimit }) => {
  const postLimitOptions = [5, 10, 15];
  return (
    <div className='posts-per-page'>
      <label htmlFor='post-limit-select'>Posts per page</label>
      <select
        id='post-limit-select'
        value={postLimit}
        className='posts-per-page-dropdown'
        onChange={(e) => setPostLimit(e.target.value)}
        aria-label='Select posts per page'
      >
        {postLimitOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostPerPageSelector;
