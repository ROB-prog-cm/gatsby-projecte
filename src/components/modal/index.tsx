import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  siteTitle: string;
}

const Modals = ({}) => {
  return (
    <div className="container">
      <div id="openModal" className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <div className="modal__header">
              <h3 className="modal__title">Авторизация</h3>
              <a href="#close" title="Close" className="close">
                ×
              </a>
            </div>
            <div className="modal__body">
              <span className="span">E-mail</span>
              <input
                className="input"
                type="email"
                placeholder="Введите e-mail"
              />
              <span className="span">Пароль</span>
              <input
                className="input"
                type="email"
                placeholder="Введите пароль"
              />
              <button className="button__modal">Войти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modals;
