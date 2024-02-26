import React, { useState } from 'react';
import PostPerPageSelector from '../postPerPageSelector/PostPerPageSelector';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import './pagination.css';

const Pagination = ({ getPrevious, getNext, setPostLimit, postLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      getPrevious();
      handleScrollToTop();
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    getNext();
    handleScrollToTop();
  };

  return (
    <nav className='pagination'>
      <PostPerPageSelector postLimit={postLimit} setPostLimit={setPostLimit} />
      <div className='paginationButtons'>
        <IoChevronBackSharp
          className={currentPage === 1 ? 'deactivated' : 'paginationButton'}
          aria-label='back-button'
          onClick={handlePreviousPage}
          size={35}
        />
        <span className='pageNr'>{'Page ' + currentPage}</span>
        <IoChevronForwardSharp
          className='paginationButton'
          aria-label='forward-button'
          onClick={handleNextPage}
          size={35}
        />
      </div>
    </nav>
  );
};

export default Pagination;
