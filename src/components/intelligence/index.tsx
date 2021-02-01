import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import photo_1 from 'src/assets/images/insertemoticon.jpg';
import photo_2 from 'src/assets/images/whatshot.jpg';
import photo_3 from 'src/assets/images/locationcity.jpg';
import photo_4 from 'src/assets/images/Pie.jpg';
import photo_5 from 'src/assets/images/imageQQQ.jpg';
import photo_6 from 'src/assets/images/image2QQQ.jpg';
import photo_7 from 'src/assets/images/image3QQQ.jpg';
import avatar_1 from 'src/assets/images/avatar1.jpg';
import avatar_2 from 'src/assets/images/avatar2.jpg';
import reviews_1 from 'src/assets/images/Group 2.svg';
import reviews_2 from 'src/assets/images/Group 2.1.svg';
import cx from 'clsx';
import Heart from '@components/heart';
import Example from '@components/example';
import Square from '@components/square';

interface IProps {
  siteTitle: string;
}

const Blog = ({ text_1, text_2, src }) => {
  return (
    <div className={styles.element}>
      <img className={styles.photo} src={src} alt="1" />
      <div className={styles.element_text}>
        <span className={styles.text_2}>{text_1}</span>
        <div className={styles.text_1}>{text_2}</div>
      </div>
    </div>
  );
};

const Reviews = ({ reviews, text_1, text_2, avatarSrc, reviewsSrc }) => {
  return (
    <div className={styles.unit_2}>
      <div className={styles.global}>
        <div className={styles.wrap_2}>
          <img className={styles.avatar_1} src={avatarSrc} alt="1" />
          <img className={styles.reviews_1} src={reviewsSrc} alt="1" />
        </div>
        <div className={styles.wrap_1}>
          <div className={styles.text_1}>{text_1}</div>
          <span className={styles.text_2}>{text_2}</span>
          <div className={styles.text_reviews_1}>{reviews}</div>
        </div>
      </div>
    </div>
  );
};

const Intelligence = ({ siteTitle }: IProps) => (
  <div className={styles.intelligence}>
    <div className={'container'}>
      <div className={styles.intelligence_photo}>
        <div>
          <img className={styles.photo_5} src={photo_5} alt="1" />
        </div>
        <div className={styles.int}>
          <div>
            <img className={styles.photo_6} src={photo_6} alt="1" />
          </div>
          <div>
            <img className={styles.photo_6} src={photo_7} alt="1" />
          </div>
        </div>
      </div>
      <Example />
      <div className={styles.unit_1}>
        <div className={styles.inner}>
          <span className={styles.visitors}>Сведения о номере</span>
          <div className={styles.elem_1}>
            <Blog
              text_1={'Комфорт'}
              text_2={'Шумопоглощающие стены'}
              src={photo_1}
            />
            <Blog
              text_1={'Удобство'}
              text_2={'Окно в каждой из спален'}
              src={photo_2}
            />
            <Blog
              text_1={'Уют'}
              text_2={'Номер оснащён камином'}
              src={photo_3}
            />
          </div>
        </div>
        <div className={styles.inner_2}>
          <div className={styles.elem_2}>
            <img className={styles.photo_2} src={photo_4} alt="1" />
          </div>
          <div className={styles.ulli_1}>
            <ul className={styles.list}>
              <li className={cx(styles.list_item, styles.color_1)}>
                Великолепно
              </li>
              <li className={cx(styles.list_item, styles.color_2)}>Хорошо</li>
              <li className={cx(styles.list_item, styles.color_3)}>
                Удовлетворительно
              </li>
              <li className={cx(styles.list_item, styles.color_4)}>
                Разочарован
              </li>
            </ul>
          </div>
        </div>
        <Square />
      </div>
      <div className={styles.unit_3}>
        <div className={styles.visitors}>Отзывы посетителей номера</div>
        <div className={styles.unit_2}>
          <Reviews
            text_1={'Мурад Сарафанов'}
            text_2={'5 дней назад'}
            avatarSrc={avatar_1}
            reviewsSrc={reviews_2}
            reviews={
              'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.'
            }
          />
          <Reviews
            text_1={'Патрисия Стёклышкова'}
            text_2={' Неделю назад'}
            avatarSrc={avatar_2}
            reviewsSrc={reviews_1}
            reviews={
              'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент'
            }
          />
        </div>
        <div className={styles.inner_2}>
          <ul className={styles.list}>
            <span className={styles.regulations_1}>Правила</span>
            <li className={cx(styles.list_item, styles.color_5)}>
              Нельзя с питомцами
            </li>
            <li className={cx(styles.list_item, styles.color_5)}>
              Без вечеринок и мероприятий
            </li>
            <li className={cx(styles.list_item, styles.color_5)}>
              Время прибытия — после 13:00, а выезд до 12:00
            </li>
          </ul>
          <div className={styles.regulations}>
            <span className={styles.regulations_1}>Отмена</span>
            <div className={styles.reviews_2}>
              Бесплатная отмена в течение 48 ч. После этого при отмене не
              позднее чем за 5 дн. до прибытия вы получите полный возврат за
              вычетом сбора за услуги.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intelligence;
