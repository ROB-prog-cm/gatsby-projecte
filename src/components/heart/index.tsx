import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';

const Heart = ({}) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id="heart_1" />
      <label htmlFor="heart_1">
        <span className={styles.span_1}>12</span>
        <span className={styles.span_1}>20</span>
      </label>
    </div>
  );
};

export default Heart;
