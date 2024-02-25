import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Categories from '../Categories';

describe('Categories component', () => {
  const mockCategoriesData = ['Category 1', 'Category 2', 'Category 3'];
  const mockSetCategory = jest.fn();

  beforeEach(() => {
    render(
      <Categories
        categoriesData={mockCategoriesData}
        currentCategory={'Category 2'}
        setCategory={mockSetCategory}
      />
    );
  });

  describe('Rendering', () => {
    test('renders all category titles', () => {
      const categoryTitles = mockCategoriesData.map((category) =>
        screen.getByText(category)
      );
      expect(categoryTitles).toHaveLength(mockCategoriesData.length);
    });
  });

  describe('Interaction', () => {
    test('calls setCategory when a category is clicked', () => {
      const categoryToClick = screen.getByText('Category 1');
      fireEvent.click(categoryToClick);
      expect(mockSetCategory).toHaveBeenCalledWith('Category 1');
    });
  });

  describe('Styling', () => {
    test('applies "chosen" class to currentCategory', () => {
      const chosenCategory = screen.getByText('Category 2');
      expect(chosenCategory).toHaveClass('chosen');
    });

    test('does not apply "chosen" class to other categories', () => {
      const otherCategory = screen.getByText('Category 1');
      expect(otherCategory).not.toHaveClass('chosen');
    });
  });
});
