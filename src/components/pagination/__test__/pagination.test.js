import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination component', () => {
  let mockGetPrevious, mockGetNext, mockSetPostLimit, mockPostLimit;

  beforeEach(() => {
    mockGetPrevious = jest.fn();
    mockGetNext = jest.fn();
    mockSetPostLimit = jest.fn();
    mockPostLimit = 10;

    render(
      <Pagination
        getPrevious={mockGetPrevious}
        getNext={mockGetNext}
        setPostLimit={mockSetPostLimit}
        postLimit={mockPostLimit}
      />
    );
  });

  test('renders Pagination with initial state', () => {
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });

  test('clicking forward button increments current page', () => {
    fireEvent.click(screen.getByLabelText('forward-button'));

    expect(screen.getByText('Page 2')).toBeInTheDocument();
  });

  test('clicking back button decrements current page if not on first page', () => {
    fireEvent.click(screen.getByLabelText('forward-button'));
    fireEvent.click(screen.getByLabelText('back-button'));

    expect(screen.getByText('Page 1')).toBeInTheDocument();
  });
});
