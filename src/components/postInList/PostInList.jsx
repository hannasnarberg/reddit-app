import React from 'react';
import { timeAgo } from '../../utils/timeAgo';
import { useNavigate } from 'react-router-dom';
import './postInList.css';
import PostFooter from '../postFooter/PostFooter';

const PostInList = ({ post, setCurrentPost }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setCurrentPost(post);
    navigate('/details');
  };

  return (
    <div className='post-in-list' to='/details' onClick={handleLinkClick}>
      <div className='text-content'>
        <h2 className='post-title'>{post.title}</h2>
        <div>
          <span>{post.author}</span>
          <span className='dot'> &#183; </span>
          <span>{timeAgo(post.created)}</span>
        </div>
        <PostFooter
          score={post.score}
          numComments={post.num_comments}
          permalink={post.permalink}
        />
      </div>
      {post.thumbnail && /\.(jpeg|jpg|gif|png)$/.test(post.thumbnail) && (
        <img className='thumbnail' src={post.thumbnail} alt='Thumbnail' />
      )}
    </div>
  );
};

export default PostInList;
