import styles from '@components/pagination/styles.module.scss';
import * as React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = ({}) => {
  function handlePageClick(data) {
    console.log(data);
  }

  return (
    <ReactPaginate
      nextLabel={
        <span className={styles.arrow}>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0.426758L17.0156 8.44238L9 16.458L7.59375 15.0518L13.1719 9.42676H0.984375V7.45801H13.1719L7.59375 1.83301L9 0.426758Z"
              fill="white"
            />
          </svg>
        </span>
      }
      pageCount={15}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      nextLinkClassName={styles.next_link}
    />
  );
};

export default Paginate;
