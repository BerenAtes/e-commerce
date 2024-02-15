import React, { useEffect } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  onPage,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa değiştiğinde sayfanın en üstüne git
  }, [currentPage]);

  return (
    <div className="flex justify-center mb-[2rem]">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="bg-gray-400 hover:bg-gray-600 text-gray-100 font-bold py-2 px-4 rounded mr-2"
      >
        Geri
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPage(page)}
          className={`px-3 py-2 rounded mr-2 ${
            currentPage === page
              ? "bg-blue-400 text-gray-100"
              : "bg-white text-gray-500 hover:bg-blue-100"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="bg-gray-400 hover:bg-gray-600 text-gray-100 font-bold py-2 px-4 rounded ml-2"
      >
        İleri
      </button>
    </div>
  );
};

export default Pagination;
