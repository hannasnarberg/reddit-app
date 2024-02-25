import React from 'react';
import './postPerPageSelector.css';

const PostPerPageSelector = ({ postLimit, setPostLimit }) => {
  const postLimitOptions = [5, 10, 15];
  return (
    <div className='postsPerPage'>
      <label htmlFor='postLimitSelect'>Posts per page</label>
      <select
        id='postLimitSelect'
        value={postLimit}
        className='postsPerPageDropdown'
        onChange={(e) => setPostLimit(e.target.value)}
        data-testid='postLimitSelect'
      >
        {postLimitOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default PostPerPageSelector;
