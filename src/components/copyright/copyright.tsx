import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/main-layout';
import photo from 'src/assets/images/1.svg';
import photo_1 from 'src/assets/images/2.svg';
import photo_2 from 'src/assets/images/3.svg';

interface IProps {
  siteTitle: string;
}

const Copyright = ({ siteTitle }: IProps) => (
  <div className={styles.copyright}>
    <div className={'container'}>
      <div className={styles.copyright__inner}>
        <div className={styles.copyright__text}>
          Copyright © 2018 Toxin отель. Все права зачищены.
        </div>
        <div className={styles.copyright__social}>
          <img className={styles.photo} src={photo} alt="1" />
          <img className={styles.photo} src={photo_1} alt="2" />
          <img className={styles.photo} src={photo_2} alt="3" />
        </div>
      </div>
    </div>
  </div>
);

export default Copyright;
