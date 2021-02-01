import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/main-layout';
import logo from 'src/assets/images/Logo.svg';

interface IProps {
  siteTitle: string;
}

const Footer = ({ siteTitle }: IProps) => (
  <footer>
    <div className={styles.footer}>
      <div className={'container'}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__info}>
            <div className={styles.footer__logo}>
              <img className={styles.header__logo} src={logo} alt="logo" />
            </div>
            <div className={styles.footer__text}>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </div>
          </div>
          <div className={styles.footer__nav}>
            <span>Навигация</span>
            <a className={styles.link} href="#">
              О нас
            </a>
            <a className={styles.link} href="#">
              Новости
            </a>
            <a className={styles.link} href="#">
              Служба поддержки
            </a>
            <a className={styles.link} href="#">
              Услуги
            </a>
          </div>
          <div className={styles.footer__about}>
            <span>О нас</span>
            <a className={styles.link} href="#">
              О сервисе
            </a>
            <a className={styles.link} href="#">
              Наша команда
            </a>
            <a className={styles.link} href="#">
              Вакансии
            </a>
            <a className={styles.link} href="#">
              Инвесторы
            </a>
          </div>
          <div className={styles.footer__support}>
            <span>Служба поддержки</span>
            <a className={styles.link} href="#">
              Соглашения
            </a>
            <a className={styles.link} href="#">
              Сообщества
            </a>
            <a className={styles.link} href="#">
              Связь с нами
            </a>
          </div>
          <div className={styles.footer__subscription}>
            <span>Подписка</span>
            <div className={styles.footer__subscription_text}>
              Получайте специальные предложения и новости сервиса
            </div>
            <input className={styles.input} type="Email" placeholder="Email" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
