import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import arrow from 'src/assets/images/arrow_forward.svg';
import Modals from '@components/modal';

const Square = ({ siteTitle }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.info}>
        <span className={styles.number}>
          <span className={styles.number_2}>№</span> 888
          <span className={styles.color}>люкс</span>
        </span>
        <div className={styles.info_2}>
          <span className={styles.price}>
            9 990₽ <span className={styles.price_2}>в сутки</span>
          </span>
        </div>
      </div>
      <div className={styles.wrap}>
        <span className={styles.wrap_2}>9 990₽ х 4 суток</span>
        <span className={styles.wrap_3}>39 960₽</span>
      </div>
      <div className={styles.wrap}>
        <span className={styles.wrap_2}>Сбор за услуги: скидка 2 179₽</span>
        <span className={styles.wrap_3}>0₽</span>
      </div>
      <div className={styles.wrap}>
        <span className={styles.wrap_2}>Сбор за доп. услуги</span>
        <span className={styles.wrap_3}>300₽</span>
      </div>
      <div className={styles.button}>
        <button className={styles.btn}>забронировать</button>
        <img className={styles.photo} src={arrow} alt="1" />
      </div>
    </div>
  );
};

export default Square;
