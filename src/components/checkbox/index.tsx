import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';

const Checkbox = ({ id_checkbox, html_checkbox, text_label, info }) => {
  return (
    <div className={styles.checkbox}>
      <input className={styles.input} type="checkbox" id={id_checkbox} />
      <label className={styles.label} htmlFor={html_checkbox}>
        <span className={styles.span_1}>{info}</span>
        {text_label}
      </label>
    </div>
  );
};

export default Checkbox;
