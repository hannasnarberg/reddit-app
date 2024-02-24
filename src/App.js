import './App.css';
import fetchPosts from './getPosts';
import { useEffect, useState } from 'react';
import logo from './logo.png';
import { timeAgo } from './timeAgo';
import { categories } from './categories';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

const App = () => {
  const [posts, setPosts] = useState(null);
  const [currentCategory, setCategory] = useState('javascript');
  const [postLimit, setPostLimit] = useState(10);

  console.log(posts);

  const getPosts = async (page = 'current', id = '') => {
    try {
      const postsData = await fetchPosts(currentCategory, postLimit, page, id);
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [currentCategory]);

  if (!posts) {
    return <div>Loading..</div>;
  }

  return (
    <div className='app'>
      <img src={logo} alt='Reddit 2.0' className='logo' />
      <div className='content'>
        <div className='categoriesSection'>
          <h2>Categories</h2>
          <hr></hr>
          <div className='categories'>
            {categories.sort().map((category) => (
              <div
                className={
                  category === currentCategory ? 'chosen category' : 'category'
                }
                onClick={() => setCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div>
          {posts.data.children.slice(0, postLimit).map((post) => (
            <div className='card'>
              <div>
                <h2>{post.data.title}</h2>
                <div>
                  <div>
                    <span>{post.data.author}</span>
                    <span className='dot'> &#183; </span>
                    <span>{timeAgo(post.data.created)}</span>
                  </div>
                  <div>
                    <a
                      id='linkToPost'
                      href={'https://www.reddit.com' + post.data.permalink}
                    >
                      View on Reddit
                    </a>
                  </div>
                  <span>{post.data.score}</span>
                  <span>{post.data.num_comments}</span>
                </div>
              </div>
              {post.data.thumbnail.startsWith('http') ? (
                <img
                  src={post.data.thumbnail}
                  alt='Thumbnail'
                  className='thumbnail'
                />
              ) : (
                ''
              )}
            </div>
          ))}
          <div className='navigation'>
            <div className='lol'>
              <IoChevronBackSharp
                onClick={() => getPosts('before', posts.data.before)}
                size={30}
                className='navButton'
              />
              <div>Back</div>
            </div>
            <div className='lol'>
              <IoChevronForwardSharp
                onClick={() => getPosts('after', posts.data.after)}
                size={30}
                className='navButton'
              />
              <div>Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
