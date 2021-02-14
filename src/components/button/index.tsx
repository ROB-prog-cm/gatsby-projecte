import { Link } from 'gatsby';
import React, { useState } from 'react';
import { inspect } from 'util';
import styles from './styles.module.scss';
import cx from 'clsx';

interface IProps {
  siteTitle: string;
}

const Button = ({ gog }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        disabled={count <= 0}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <input className={styles.input} type="number" value={count} />
      <button
        className={styles.button}
        disabled={count >= 5}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Button;
