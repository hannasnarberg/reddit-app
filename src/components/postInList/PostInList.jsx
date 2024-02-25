import { timeAgo } from '../../utils/timeAgo';
import { useNavigate } from 'react-router-dom';
import './postInList.css';
import { GoComment } from 'react-icons/go';
import { PiArrowFatUpLight } from 'react-icons/pi';
import { PiArrowFatDownLight } from 'react-icons/pi';

const PostInList = ({ data, setCurrentPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentPost(data);
    navigate('/details');
  };

  return (
    <div className='postInList' to='/details' onClick={handleClick}>
      <div className='textContent'>
        <h2 className='postTitle'>{data.title}</h2>
        <div>
          <span>{data.author}</span>
          <span className='dot'> &#183; </span>
          <span>{timeAgo(data.created)}</span>
        </div>
        <div className='linkAndStats'>
          <div>
            <a
              className='linkToPost'
              href={'https://www.reddit.com' + data.permalink}
              target='_blank'
              rel='noreferrer'
            >
              Open in Reddit
            </a>
          </div>
          <div className='stats'>
            <div>
              <PiArrowFatUpLight size={20} />
              <span>{data.score}</span>
              <PiArrowFatDownLight size={20} />
            </div>
            <div>
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

export default PostInList;
