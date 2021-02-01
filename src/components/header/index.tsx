import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import logo from 'src/assets/images/Logo.svg';
import Modals, { Placeholder } from '@components/modal';
import arrow from '@assets/images/arrow_forward.svg';

interface IProps {
  siteTitle: string;
}

const Header = ({}: IProps) => {
  return (
    <header>
      <div className={styles.header}>
        <div className={'container'}>
          <div className={styles.header__inner}>
            <div className={styles.header__img}>
              <img className={styles.header__logo} src={logo} alt="logo" />
            </div>
            <header className={styles.nav}>
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
                Соглашения
              </a>

              <div className={styles.header__btn}>
                <Modals
                  choice={'зарегистрироваться'}
                  toxin={'Нет аккаунта на Toxin?'}
                  choice_2={'создать'}
                >
                  <h1 className={styles.modal_header}>Войти</h1>
                  <div className={styles.wrap}>
                    <div className={styles.placeholder}>
                      <Placeholder text={'Email'} />
                      <Placeholder text={'Пароль'} />
                    </div>
                    <div className={styles.btn}>
                      <button className={styles.button}>войти</button>
                      <img className={styles.photo} src={arrow} alt="1" />
                    </div>
                  </div>
                </Modals>
                <Modals
                  choice={'войти'}
                  toxin={'Уже есть аккаунт на Toxin'}
                  choice_2={'войти'}
                >
                  <h1 className={styles.modal_header}>Регистрация аккаунта</h1>
                  <div className={styles.wrap}>
                    <div className={styles.placeholder}>
                      <Placeholder text={'Имя'} />
                      <Placeholder text={'Фамилия'} />
                      <div className={styles.inner}>
                        <input
                          className={styles.radio}
                          id="radio_1"
                          name="rd"
                          type="radio"
                          checked
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
                      <Placeholder text={'ДД.ММ.ГГГГ'} />
                      <h1 className={styles.modal_header_1}>
                        данные для входа в сервис
                      </h1>
                      <Placeholder text={'Email'} />
                      <Placeholder text={'Пароль'} />
                    </div>
                    <div className={styles.inner}>
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
                      <button className={styles.button}>
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
    </header>
  );
};

export default Header;
