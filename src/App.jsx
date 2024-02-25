import './App.css';
import { useState } from 'react';
import logo from './logo.png';
import Categories from './components/categories/Categories';
import FullPost from './components/fullPost/FullPost';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { categoriesData } from './categoriesData';
import Feed from './components/feed/Feed';

const App = () => {
  const [currentCategory, setCategory] = useState('javascript');
  const [currentPost, setCurrentPost] = useState(null);

  const navigate = useNavigate();

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
          categoriesData={categoriesData}
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
                currentCategory={currentCategory}
                setCurrentPost={setCurrentPost}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
