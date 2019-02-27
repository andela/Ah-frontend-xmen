import React from 'react';

export const Pagination = (props) => {
  const pageNumber = props.pageNumbers;

  if (pageNumber.length > 0) {
    const list = pageNumber.map((page, index) => {
      let activeClass = '';
      if (index + 1 == props.currentPage) {
        activeClass = 'active';
      } else {
        activeClass = '';
      }
      return (
        <li>
          <a
            href=""
            className={activeClass}
            onClick={() => {
              props.nextPage(index + 1);
            }}
          >
            {page}
          </a>
        </li>
      );
    });

    return (
      <div className="">
        <div>
          <ul className="pagination modal-3">
            <li>
              <a className="prev" onClick={props.previousPage}>
                &laquo;
              </a>
            </li>
            {list}
            <li>
              <a
                className="next"
                onClick={() => {
                  props.nextPage(props.currentPage + 1);
                }}
              >
                &raquo;
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Pagination;
