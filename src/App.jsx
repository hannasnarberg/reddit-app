import './App.css';
import fetchPosts from './getPosts';
import { useEffect, useState, useCallback } from 'react';
import logo from './logo.png';
import Feed from './components/Feed/Feed';
import Categories from './components/Categories/Categories';
import FullPost from './components/FullPost/FullPost';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

const App = () => {
  const [posts, setPosts] = useState(null);
  const [currentCategory, setCategory] = useState('javascript');
  const [currentPost, setCurrentPost] = useState(null);
  const [postLimit, setPostLimit] = useState(10);

  const navigate = useNavigate();

  const getPosts = useCallback(
    async (page = 'current', id = '') => {
      try {
        const postsData = await fetchPosts(
          currentCategory,
          postLimit,
          page,
          id
        );
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    [currentCategory, postLimit]
  );

  useEffect(() => {
    getPosts();
  }, [currentCategory, postLimit, getPosts]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app'>
      <img
        onClick={() => {
          setCategory('javascript');
          navigate('/');
        }}
        src={logo}
        alt='Reddit 2.0'
        className='logo'
      />
      <div className='pageContent'>
        <Categories
          currentCategory={currentCategory}
          setCategory={(category) => {
            setCategory(category);
            navigate('/');
          }}
        />
        <Routes>
          <Route
            path='/details'
            element={
              currentPost ? (
                <FullPost currentPost={currentPost} />
              ) : (
                <Navigate to='/' />
              )
            }
          ></Route>
          <Route
            path='/'
            element={
              <Feed
                category={currentCategory}
                posts={posts.data}
                postLimit={postLimit}
                getPosts={getPosts}
                setCurrentPost={setCurrentPost}
                setPostLimit={setPostLimit}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
