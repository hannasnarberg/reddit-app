import { categories } from './categories';

export const SideBar = ({ currentCategory, setCategory }) => {
  return (
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
  );
};
