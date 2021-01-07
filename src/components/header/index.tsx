import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/main-layout';
import logo from 'src/assets/images/Logo.png';

interface IProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: IProps) => (
  <header>
    <div className={styles.header}>
      <div className={'container'}>
        <div className={styles.header__inner}>
          <div className={styles.header__img}>
            <img className={styles.header__logo} src={logo} alt="logo" />
          </div>
          <div className={styles.nav}>
            <a className={styles.nav__link} href="#">
              О нас
            </a>
            <a className={styles.nav__link} href="#">
              Услуги
            </a>
            <a className={styles.nav__link} href="#">
              Вакансии
            </a>
            <a className={styles.nav__link} href="#">
              Новости
            </a>
            <a className={styles.nav__link} href="#">
              Войти
            </a>
            <div className={styles.header__btn}>
              <button className={styles.button_1}>войти</button>
              <button className={styles.button_2}>зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
