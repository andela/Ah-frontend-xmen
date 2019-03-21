/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */

import React, { Component } from 'react';
import paginate from '../../utils/paginator';

class Pagination extends Component {
  render() {
    const { props } = this;
    const pageNumber = paginate(props.currentPage, props.pageNumbers.length);

    if (pageNumber.length > 0) {
      const list = pageNumber.map((page, index) => {
        let activeClass = '';
        if (index + 1 === props.currentPage) {
          activeClass = 'active';
        } else {
          activeClass = '';
        }
        return (
          <li key={index}>
            <a
              id={`page_${index}`}
              className={activeClass}
              onClick={() => {
                props.nextPage(page);
              }}
              onKeyPress=""
              role="button"
              tabIndex="0"
            >
              {page}
            </a>
          </li>
        );
      });

      return (
        <div className="">
          <ul className="pagination modal-3">
            <li>
              <a
                id="previous"
                className="prev"
                onClick={() => {
                  props.nextPage(props.currentPage - 1);
                }}
                onKeyPress=""
                role="button"
                tabIndex="0"
              >
              &laquo;
              </a>
            </li>
            {list}
            <li>
              <a
                id="next"
                className="next"
                onClick={() => {
                  props.nextPage(props.currentPage + 1);
                }}
                onKeyPress=""
                role="button"
                tabIndex="0"
              >
              &raquo;
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Pagination;
