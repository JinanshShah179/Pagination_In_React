import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="prev-next"
      >
        Prev
      </button>
      {pages.map((page, index) => {
        return (
          <>
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? "active" : ""}
            >
              {page}
            </button>
          </>
        );
      })}
      <button
        onClick={handleNext}
        disabled={currentPage === pages.length}
        className="prev-next"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
