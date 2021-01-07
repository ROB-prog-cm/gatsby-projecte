import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/main-layout';

interface IProps {
  siteTitle: string;
}

const Choice = ({ siteTitle }: IProps) => (
  <div className={styles.choice}>
    <div className={'container'}>
      <div className={styles.number}>
        <div className={styles.search}>
          <span>Найдём номера под ваши пожелания</span>
          <div>
            <input
              className={styles.arrival}
              type="arrival"
              placeholder="ДД.ММ.ГГГГ"
            />
            <input
              className={styles.guests}
              type="guests"
              placeholder="ДД.ММ.ГГГГ"
            />
          </div>
          <div>
            <input
              className={styles.departure}
              type="departure"
              placeholder="Сколько гостей"
            />
          </div>
          <div>
            <button>подобрать номер</button>
          </div>
        </div>
        <div className={styles.number__text}>
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </div>
      </div>
    </div>
  </div>
);

export default Choice;
