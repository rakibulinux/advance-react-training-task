/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Pagination = ({
  currentPage,
  totalOrders,
  ordersPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 px-3 py-1 rounded ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
