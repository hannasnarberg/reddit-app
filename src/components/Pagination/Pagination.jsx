import React from 'react';
import PageDropdown from './PageDropdown';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import { useState } from 'react';

const Pagination = ({ getPrevious, getNext, setPostLimit, postLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='pagination'>
      <PageDropdown postLimit={postLimit} setPostLimit={setPostLimit} />
      <div className='paginationButtons'>
        <IoChevronBackSharp
          onClick={() =>
            currentPage > 1 &&
            (scrollToTop(), getPrevious(), setCurrentPage(currentPage - 1))
          }
          size={20}
          className={
            currentPage === 1
              ? 'deactivated PaginationButton'
              : 'paginationButton'
          }
        />
        <span>{currentPage}</span>
        <IoChevronForwardSharp
          onClick={() => {
            getNext();
            setCurrentPage(currentPage + 1);
            scrollToTop();
          }}
          size={20}
          className='paginationButton'
        />
      </div>
    </div>
  );
};

export default Pagination;
