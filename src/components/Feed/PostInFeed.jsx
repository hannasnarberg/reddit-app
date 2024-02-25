import { timeAgo } from '../../utils/timeAgo';
import { useNavigate } from 'react-router-dom';
import './Feed.css';
import { GoComment } from 'react-icons/go';
import { PiArrowFatUpLight } from 'react-icons/pi';
import { PiArrowFatDownLight } from 'react-icons/pi';

const PostInFeed = ({ data, setCurrentPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentPost(data);
    navigate('/details');
  };

  return (
    <div className='postInFeed' to='/details' onClick={handleClick}>
      <div className='textContent'>
        <h2 className='postTitle'>{data.title}</h2>
        <div>
          <span>{data.author}</span>
          <span className='dot'> &#183; </span>
          <span>{timeAgo(data.created)}</span>
        </div>
        <div className='test'>
          <div>
            <a
              id='linkToPost'
              href={'https://www.reddit.com' + data.permalink}
              target='_blank'
              rel='noreferrer'
            >
              Open in Reddit
            </a>
          </div>
          <div className='scoreAndComments'>
            <div className='score'>
              <PiArrowFatUpLight size={20} />
              <span>{data.score}</span>
              <PiArrowFatDownLight size={20} />
            </div>
            <div className='comments'>
              <GoComment size={20} />
              <span>{data.num_comments}</span>
            </div>
          </div>
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
