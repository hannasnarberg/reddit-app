import React from 'react';
import PostPerPageSelector from './PostPerPageSelector';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import './pagination.css';
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
      <PostPerPageSelector postLimit={postLimit} setPostLimit={setPostLimit} />
      <div className='paginationButtons'>
        <IoChevronBackSharp
          className={currentPage === 1 ? 'deactivated' : 'paginationButton'}
          onClick={() =>
            currentPage > 1 &&
            (scrollToTop(), getPrevious(), setCurrentPage(currentPage - 1))
          }
          size={35}
        />
        <span className='pageNr'>{'Page ' + currentPage}</span>
        <IoChevronForwardSharp
          className='paginationButton'
          onClick={() => {
            getNext();
            setCurrentPage(currentPage + 1);
            scrollToTop();
          }}
          size={35}
        />
      </div>
    </div>
  );
};

export default Pagination;
