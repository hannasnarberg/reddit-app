import './categories.css';

const Categories = ({ categoriesData, currentCategory, setCategory }) => {
  const sortedCategories = [...categoriesData].sort();

  return (
    <nav className='categories-section'>
      <h2 className='categories-title'>Categories</h2>
      <ul className='categories-list'>
        {sortedCategories.map((category, index) => (
          <li
            key={index}
            className={`categories-entry ${
              category === currentCategory ? 'chosen' : ''
            }`}
            onClick={() => setCategory(category)}
            role='menuitem'
            aria-current={category === currentCategory ? 'true' : null}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
