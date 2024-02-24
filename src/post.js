import { timeAgo } from './timeAgo';

export const Post = ({ data, setCurrentPost }) => {
  return (
    <div className='card' onClick={() => setCurrentPost(data)}>
      <div>
        <h2>{data.title}</h2>
        <div>
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
            >
              View on Reddit
            </a>
          </div>
          <span>{data.score}</span>
          <span>{data.num_comments}</span>
        </div>
      </div>
      {data.thumbnail.startsWith('http') ? (
        <img src={data.thumbnail} alt='Thumbnail' className='thumbnail' />
      ) : (
        ''
      )}
    </div>
  );
};
