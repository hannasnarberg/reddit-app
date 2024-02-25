import { timeAgo } from '../../utils/timeAgo';
import { useNavigate } from 'react-router-dom';
import './PostInFeed.css';

const PostInFeed = ({ data, setCurrentPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentPost(data);
    navigate('/details');
  };

  return (
    <div className='postInFeed' to='/details' onClick={handleClick}>
      <div>
        <h2>{data.title}</h2>
        <div>
          <span>{data.author}</span>
          <span className='dot'> &#183; </span>
          <span>{timeAgo(data.created)}</span>
        </div>
        <div>
          <a
            id='linkToPost'
            href={'https://www.reddit.com' + data.permalink}
            target='_blank'
            rel='noreferrer'
          >
            View on Reddit
          </a>
        </div>
        <div className='scoreAndComments'>
          <span>{'Score: ' + data.score}</span>
          <span>{'Comments: ' + data.num_comments}</span>
        </div>
      </div>
      {data.thumbnail.startsWith('http') ? (
        <img src={data.thumbnail} alt='Thumbnail' />
      ) : (
        ''
      )}
    </div>
  );
};

export default PostInFeed;
