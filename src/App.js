import './App.css';
import fetchPosts from './getPosts';
import { useEffect, useState } from 'react';
import logo from './logo.png';
import Feed from './feed';
import { SideBar } from './sideBar';
import FullPost from './fullPost';

const App = () => {
  const [posts, setPosts] = useState(null);
  const [currentCategory, setCategory] = useState('javascript');
  const [currentPost, setCurrentPost] = useState(null);
  const [postLimit, setPostLimit] = useState(10);

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

  console.log(currentPost);
  if (!posts) {
    return <div>Loading..</div>;
  }

  return (
    <div className='app'>
      <img src={logo} alt='Reddit 2.0' className='logo' />
      <div className='pageContent'>
        <SideBar
          currentCategory={currentCategory}
          setCategory={(category) => {
            setCategory(category);
            setCurrentPost(null);
          }}
        />
        {currentPost ? (
          <FullPost currentPost={currentPost} />
        ) : (
          <Feed
            posts={posts.data}
            postLimit={postLimit}
            getPosts={getPosts}
            setCurrentPost={setCurrentPost}
            setPostLimit={setPostLimit}
          />
        )}
      </div>
    </div>
  );
};

export default App;
