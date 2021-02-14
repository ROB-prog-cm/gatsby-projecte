import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import logo from 'src/assets/images/Logo.svg';
import Modals, { Input } from '@components/modal';
import arrow from '@assets/images/arrow_forward.svg';
import cx from 'clsx';

interface IProps {
  siteTitle: string;
}

const Header = ({}: IProps) => {
  return (
    <div className={'container'}>
      <div className={styles.header}>
        <div className={styles.header__inner}>
          <div className={styles.header__img}>
            <img className={styles.header__logo} src={logo} alt="logo" />
          </div>
          <header className={styles.nav}>
            <p>
              <Link className={styles.nav__link} to="/blog">
                О нас
              </Link>
            </p>
            <p>
              <Link className={styles.nav__link} to="/blog">
                Услуги
              </Link>
            </p>
            <p>
              <Link className={styles.nav__link} to="/blog">
                Услуги
              </Link>
            </p>
            <p>
              <Link className={styles.nav__link} to="/blog">
                Вакансии
              </Link>
            </p>
            <p>
              <Link className={styles.nav__link} to="/blog">
                Новости
              </Link>
            </p>
            <p>
              <Link className={styles.nav__link} to="/blog">
                Соглашения
              </Link>
            </p>
            <div className={styles.header__btn}>
              <Modals
                triggerContentBtn={'войти'}
                confirmContentBtn={'войти'}
                toxin={'Уже есть аккаунт на Toxin'}
              >
                <h1 className={styles.modal_header}>Войти</h1>
                <div className={styles.wrap}>
                  <div className={styles.placeholder}>
                    <Input text={'Email'} />
                    <Input text={'Пароль'} />
                  </div>
                  <div className={styles.btn}>
                    <button className={cx(styles.button, styles.btn_2)}>
                      войти
                    </button>
                    <img className={styles.photo} src={arrow} alt="1" />
                  </div>
                </div>
              </Modals>
              <Modals
                classNameTriggerBtn={styles.button}
                triggerContentBtn={'зарегистрироваться'}
                confirmContentBtn={'создать'}
                toxin={'Нет аккаунта на Toxin?'}
              >
                <h1 className={styles.modal_header}>Регистрация аккаунта</h1>
                <div className={styles.wrap}>
                  <div className={styles.placeholder}>
                    <Input text={'Имя'} />
                    <Input text={'Фамилия'} />
                    <div className={styles.inner}>
                      <input
                        className={styles.radio}
                        id="radio_1"
                        name="rd"
                        type="radio"
                      />
                      <label htmlFor="radio_1" className={styles.radio_label}>
                        Мужчина
                      </label>
                      <input
                        className={styles.radio}
                        id="radio_2"
                        name="rd"
                        type="radio"
                      />
                      <label htmlFor="radio_2" className={styles.radio_label}>
                        Женщина
                      </label>
                    </div>
                    <h1 className={styles.modal_header_1}>дата рождения</h1>
                  </div>
                  <div className={styles.placeholder}>
                    <Input text={'ДД.ММ.ГГГГ'} />
                    <h1 className={styles.modal_header_1}>
                      данные для входа в сервис
                    </h1>
                    <Input text={'Email'} />
                    <Input text={'Пароль'} />
                  </div>
                  <div className={styles.inner_2}>
                    <input
                      className={styles.switch}
                      type="checkbox"
                      id="switch"
                    />
                    <label className={styles.switch_2} htmlFor="switch">
                      Toggle
                    </label>
                    <span className={styles.inner_text}>
                      Получать спецпредложения
                    </span>
                  </div>
                  <div className={styles.btn}>
                    <button className={cx(styles.button, styles.btn_2)}>
                      зарегистрироваться
                    </button>
                    <img className={styles.photo} src={arrow} alt="1" />
                  </div>
                </div>
              </Modals>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
