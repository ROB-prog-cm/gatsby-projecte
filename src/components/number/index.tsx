import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import ReactSlider from 'react-slider';
import StarRatings from 'react-star-ratings';

import photo from '../../assets/images/image1.jpg';
import photo_1 from '../../assets/images/image2.jpg';
import photo_2 from '../../assets/images/image3.jpg';
import photo_3 from '../../assets/images/image4.jpg';
import photo_4 from '../../assets/images/image5.jpg';
import photo_5 from '../../assets/images/image6.jpg';
import photo_6 from '../../assets/images/image7.jpg';
import photo_7 from '../../assets/images/image8.jpg';
import photo_8 from '../../assets/images/image9.jpg';
import photo_9 from '../../assets/images/image10.jpg';
import photo_10 from '../../assets/images/image11.jpg';
import photo_11 from '../../assets/images/image12.jpg';

interface IProps {
  siteTitle: string;
}
const Star = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starDimension="20px"
      starSpacing="1px"
      starRatedColor={'#8BA4F9'}
    />
  );
};

const Item = ({ number, rating, price }) => {
  return (
    <div className={styles.info}>
      <Carousel itemsToShow={1} showArrows={false}>
        <div>
          <img className={styles.inner} src={photo_11} alt="elem" />
        </div>
        <div>
          <img className={styles.inner} src={photo_11} alt="elem" />
        </div>
        <div>
          <img className={styles.inner} src={photo_11} alt="elem" />
        </div>
        <div>
          <img className={styles.inner} src={photo_11} alt="elem" />
        </div>
      </Carousel>
      <div className={styles.info_1}>
        <span className={styles.number_1}>
          N {number}
          <span className={styles.color}>люкс</span>
        </span>
        <span className={styles.price}>{price}₽ в сутки</span>
      </div>
      <div className={styles.info_2}>
        <Star rating={rating} />
        <span className={styles.reviews}>30 Отзывов</span>
      </div>
    </div>
  );
};

const Rooms = ({ siteTitle }: IProps) => {
  return (
    <div className={styles.number}>
      <div className={'container'}>
        <div className={styles.number_inner}>
          <div className={styles.panel}>
            <span className={styles.date}>даты пребывания в отеле</span>
            <select className={styles.option_1}>
              <option value="1">19 авг - 23 авг</option>
              <option value="2">19 авг - 23 авг</option>
              <option value="2">19 авг - 23 авг</option>
            </select>
            <select className={styles.option_1}>
              <option value="1">3 гостя, 1 младенец</option>
              <option value="2">3 гостя, 1 младенец</option>
              <option value="2">3 гостя, 1 младенец</option>
            </select>
            <div className={styles.title}>
              <div className={styles.title_1}>
                <span className={styles.date}>диапазон цены</span>
                <span className={styles.price_1}>5 000₽ - 10 000₽</span>
              </div>
              <div>
                <input type="checkbox" id="cb1" />
                <label htmlFor="cb1">Флажок 1</label>
              </div>
              <ReactSlider
                className={styles.horizontal_slider}
                thumbClassName={styles.example_thumb}
                trackClassName={styles.example_track}
                defaultValue={[70, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
                pearling
                minDistance={10}
              />
              <span className={styles.day}>
                Стоимость за сутки пребывания в номере
              </span>
            </div>
            <div className={styles.checkbox_1}>
              <span className={styles.date}>правила дома</span>
              <input type="checkbox" name="toppings" />
              <label>Можно курить</label>
              <input type="checkbox" name="toppings" />
              <label>Можно с питомцами</label>
              <input type="checkbox" name="toppings" />
              <label>Можно пригласить гостей (до 10 человек)</label>
            </div>
            <div className={styles.checkbox_1}>
              <span className={styles.date}>доступность</span>
              <span className={styles.date}>правила дома</span>
              <input type="checkbox" name="toppings" />
              <label>Ширина коридоров в номере не менее 91 см.</label>
              <input type="checkbox" name="toppings" />
              <label>
                На 1 этаже вас встретит специалист и проводит до номера.
              </label>
            </div>
            <span className={styles.date}>удобства номера</span>
            <select className={styles.option_1}>
              <option value="1">2 спальни, 2 кровати...</option>
              <option value="2">2 спальни, 2 кровати...</option>
              <option value="2">2 спальни, 2 кровати...</option>
            </select>
            <select className={styles.option_2}>
              <option value="1"> дополнительные удобства</option>
            </select>
          </div>
          <div className={styles.wrap}>
            <Item number={233} rating={3} price={22}></Item>
            <Item number={233} rating={3} price={2222}></Item>
            <Item number={44} rating={4}></Item>
            <Item number={233} rating={5}></Item>
            <Item number={23} rating={1}></Item>
            <Item number={233} rating={2}></Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
