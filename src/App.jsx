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

  const handleCategoryChange = (category) => {
    setCategory(category);
    navigate('/');
  };

  const handleLogoClick = () => {
    setCategory('javascript');
    navigate('/');
  };

  return (
    <div className='app'>
      <img
        onClick={handleLogoClick}
        src={logo}
        alt='Reddit 2.0'
        className='logo'
      />
      <div className='page-content'>
        <Categories
          categoriesData={categoriesData}
          currentCategory={currentCategory}
          setCategory={handleCategoryChange}
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
          />
          <Route
            path='/'
            element={
              <Feed
                currentCategory={currentCategory}
                setCurrentPost={setCurrentPost}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
