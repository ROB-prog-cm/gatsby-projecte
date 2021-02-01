import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Rooms from '@components/rooms';
import { useState } from 'react';

const Dropdown = ({ children, title, items = [] }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {}

  return (
    <div className={styles.dd_wrapper}>
      <div
        className={styles.dd_header}
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className={styles.dd_header__title}>
          <p className={styles.option_2}>{title}</p>
        </div>
        <div className={styles.dd_header__action}>
          <span className={open ? styles.arrow_up : styles.arrow_down}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path fill="#444444" d="M13 4v2l-5 5-5-5v-2l5 5z" />
            </svg>
          </span>
        </div>
      </div>
      {open ? children : null}
    </div>
  );
};

export default Dropdown;
