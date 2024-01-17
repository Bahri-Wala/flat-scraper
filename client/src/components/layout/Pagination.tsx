import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./pagination.css";

interface IPaginationProps {
  flatsPerPage: number;
  totalFlats: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
const Pagination = ({
  flatsPerPage,
  totalFlats,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const [pageNumbers, setPageNumbers] = useState(Array<number>);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalFlats / flatsPerPage); i++) {
      // setPageNumbers((prev) => [...prev, i]);
      pages.push(i);
    }
    setPageNumbers(pages);
  }, [totalFlats, flatsPerPage]);

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`page-item ${currentPage === number ? "active" : ""}`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
