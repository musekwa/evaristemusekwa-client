import React, { useState } from "react";

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage(currentPage=>currentPage + 1)
  }

  function goToPreviousPage() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber)
  }

  function getPaginatedData() {
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + dataLimit;
      return data.slice(startIndex, endIndex);
  }

  function getPaginationGroup() {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx)=>start + idx + 1);
  }

  return <div>
      <h1>{title}</h1>
      <div className="dataContainer">
          {getPaginatedData().map((d, idx)=>(
              <RenderComponent key={idx} data={d} />
          ))}
      </div>
      <div className="pagination">
          <button onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
              prev
          </button>
          {getPaginationGroup().map((item, idx)=>(
              <button key={idx} onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active': null}`}>
                  <span>{item}</span>
              </button>
          ))}
          <button onClick={goToNextPage} className={`next ${currentPage === pages ? 'disabled' : ''}`}>
              next
          </button>
      </div>
  </div>;
}

export default Pagination;
