import { categoriesData } from '../../categoriesData';

const Categories = ({ currentCategory, setCategory }) => {
  return (
    <div className='categoriesSection'>
      <h2>Categories</h2>
      <hr></hr>
      <div className='categories'>
        {categoriesData.sort().map((category) => (
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
  );
};

export default Categories;
