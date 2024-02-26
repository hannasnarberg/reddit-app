import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination test', () => {
  let mockGetPrevious, mockGetNext, mockSetPostLimit, mockPostLimit;

  window.scrollTo = jest.fn();

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

  test('back button is deactivated at page 1', () => {
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('back-button'));
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    expect(mockGetPrevious).not.toHaveBeenCalled();
  });

  test('changing post limit updates component state', () => {
    const newPostLimit = 15;
    const postLimitSelector = screen.getByLabelText('Posts per page');

    fireEvent.change(postLimitSelector, {
      target: { value: newPostLimit.toString() },
    });

    expect(mockSetPostLimit).toHaveBeenCalledWith(newPostLimit.toString());
  });
});
