import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import photo_1 from 'src/assets/images/insertemoticon.jpg';
import photo_2 from 'src/assets/images/whatshot.jpg';
import photo_3 from 'src/assets/images/locationcity.jpg';
import photo_4 from 'src/assets/images/Pie.jpg';
import avatar_1 from 'src/assets/images/avatar1.jpg';
import avatar_2 from 'src/assets/images/avatar2.jpg';
import reviews_1 from 'src/assets/images/Group 2.1.png';
import reviews_2 from 'src/assets/images/Group 2.png';

interface IProps {
  siteTitle: string;
}

const Intelligence = ({ siteTitle }: IProps) => (
  <div className={styles.intelligence}>
    <div className={'container'}>
      <div className={styles.unit_1}>
        <div className={styles.inner}>
          <div className={styles.elem_1}>
            <div className={styles.elem}>
              <img className={styles.photo} src={photo_1} alt="1" />
              <div className={styles.subtitle}>
                <span className={styles.text_2}>Комфорт</span>
                <div className={styles.text_1}> Шумопоглощающие стены</div>
              </div>
            </div>
            <div className={styles.elem}>
              <img className={styles.photo} src={photo_3} alt="1" />
              <div className={styles.subtitle}>
                <span className={styles.text_2}>Уют</span>
                <div className={styles.text_1}> Номер оснащён камином</div>
              </div>
            </div>
            <div className={styles.elem}>
              <img className={styles.photo} src={photo_2} alt="1" />
              <div className={styles.subtitle}>
                <span className={styles.text_2}>Удобство</span>
                <div className={styles.text_1}> Окно в каждой из спален</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inner_2}>
          <div className={styles.elem_2}>
            <img className={styles.photo_2} src={photo_4} alt="1" />
          </div>
          <div className={styles.ulli_1}>
            <ul>
              <li>Великолепно</li>
              <li>Хорошо</li>
              <li>Удовлетворительно</li>
              <li>Разочарован</li>
            </ul>
          </div>
        </div>
        <div className={styles.inner_3}>
          <button>1</button>
          <button>1</button>
          <button>1</button>
        </div>
      </div>
      <div className={styles.visitors}>Отзывы посетителей номера</div>
      <div className={styles.unit_2}>
        <div className={styles.global}>
          <div className={styles.wrap_2}>
            <img className={styles.avatar_1} src={avatar_1} alt="1" />
            <img className={styles.reviews_1} src={reviews_1} alt="1" />
          </div>
          <div className={styles.wrap_1}>
            <span className={styles.text_2}>Мурад Сарафанов</span>
            <div className={styles.text_1}> 5 дней назад</div>
            <div className={styles.text_reviews_1}>
              Великолепный матрас на кровати в основной спальне! А пуфик вообще
              потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал
              комплименты повару — никто не жаловался из соседей.
            </div>
          </div>
        </div>
        <div className={styles.global}>
          <div className={styles.wrap_2}>
            <img className={styles.avatar_1} src={avatar_2} alt="1" />
            <img className={styles.reviews_1} src={reviews_2} alt="1" />
          </div>
          <div className={styles.wrap_1}>
            <span className={styles.text_2}>Патрисия Стёклышкова</span>
            <div className={styles.text_1}> Неделю назад</div>
            <div className={styles.text_reviews_2}>
              Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер
              советую заказать, каждый день новое блюдо и десерт как комплимент
            </div>
          </div>
        </div>
      </div>
      <div className={styles.unit_3}>
        <div className={styles.ulli_2}>
          <span className={styles.regulations_1}>Правила</span>
          <ul className={styles.regulations_2}>
            <li>Нельзя с питомцами</li>
            <li>Без вечеринок и мероприятий</li>
            <li>Время прибытия — после 13:00, а выезд до 12:00</li>
          </ul>
        </div>
        <div className={styles.regulations}>
          <span className={styles.regulations_1}>Отмена</span>
          <div>
            Бесплатная отмена в течение 48 ч. После этого при отмене не позднее
            чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора
            за услуги.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intelligence;
