import { categoriesData } from '../../categoriesData';
import './Categories.css';

const Categories = ({ currentCategory, setCategory }) => {
  return (
    <div className='categoriesSection'>
      <h2 className='categoriesTitle'>Categories</h2>
      <div className='categories'>
        {categoriesData.sort().map((category) => (
          <div
            key={category}
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
