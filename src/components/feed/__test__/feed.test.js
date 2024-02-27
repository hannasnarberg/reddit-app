import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Feed from '../Feed';
import fetchPosts from '../../../fetchPosts';
import { BrowserRouter } from 'react-router-dom';
import mockData from './mockData';

jest.mock('../../../fetchPosts');
window.scrollTo = jest.fn();
const mockCurrentCategory = 'javascript';
const postsPerPage = 10;

const renderFeed = () => {
  render(
    <BrowserRouter>
      <Feed currentCategory={mockCurrentCategory} setCurrentPost={jest.fn()} />
    </BrowserRouter>
  );
};

describe('Feed test', () => {
  test('renders posts on successful API call', async () => {
    fetchPosts.mockResolvedValue(mockData);
    renderFeed();
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
      expect(screen.getByText('Post 2')).toBeInTheDocument();
    });
  });

  test('fetches next and previous posts on pagination button clicks', async () => {
    fetchPosts.mockResolvedValue(mockData);
    renderFeed();
    await waitFor(() => expect(screen.getByText('Page 1')).toBeInTheDocument());

    fireEvent.click(screen.getByLabelText('forward-button'));

    await waitFor(() => {
      expect(fetchPosts).toHaveBeenCalledWith(
        mockCurrentCategory,
        postsPerPage,
        'after',
        mockData.data.after
      );
    });

    fireEvent.click(screen.getByLabelText('back-button'));

    await waitFor(() => {
      expect(fetchPosts).toHaveBeenCalledWith(
        mockCurrentCategory,
        postsPerPage,
        'before',
        mockData.data.before
      );
    });
  });

  test('renders error message on failed API call', async () => {
    const errorMessage = 'Error fetching posts. Please try again later.';
    const error = new Error(errorMessage);
    fetchPosts.mockRejectedValue(error);
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    renderFeed();

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });
});
