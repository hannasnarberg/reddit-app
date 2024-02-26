import React from 'react';
import { timeAgo } from '../../utils/timeAgo';
import { useNavigate } from 'react-router-dom';
import './postInList.css';
import PostFooter from '../postFooter/PostFooter';

const PostInList = ({ data, setCurrentPost }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setCurrentPost(data);
    navigate('/details');
  };

  return (
    <div className='post-in-list' to='/details' onClick={handleLinkClick}>
      <div className='text-content'>
        <h2 className='post-title'>{data.title}</h2>
        <div>
          <span>{data.author}</span>
          <span className='dot'> &#183; </span>
          <span>{timeAgo(data.created)}</span>
        </div>
        <PostFooter currentPost={data} />
      </div>
      {data.thumbnail && /\.(jpeg|jpg|gif|png)$/.test(data.thumbnail) && (
        <img className='thumbnail' src={data.thumbnail} alt='Thumbnail' />
      )}
    </div>
  );
};

export default PostInList;
