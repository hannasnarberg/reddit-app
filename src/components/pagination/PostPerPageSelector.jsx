import React from 'react';
import './postPerPageSelector.css';

const PostPerPageSelector = ({ postLimit, setPostLimit }) => {
  const postLimitOptions = [5, 10, 15];
  return (
    <div className='postsPerPage'>
      <span>Posts per page</span>
      <select
        value={postLimit}
        className='postsPerPageDropdown'
        onChange={(e) => setPostLimit(e.target.value)}
      >
        {postLimitOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default PostPerPageSelector;
