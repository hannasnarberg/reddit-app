import './categories.css';

const Categories = ({ categoriesData, currentCategory, setCategory }) => {
  return (
    <div className='categoriesSection'>
      <h2 className='categoriesTitle'>Categories</h2>
      {categoriesData.sort().map((category) => (
        <div
          key={category}
          className={
            category === currentCategory
              ? 'chosen categoryEntry'
              : 'categoryEntry'
          }
          onClick={() => setCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
