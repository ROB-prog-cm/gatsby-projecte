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

const Item = ({ number, rating, price, src }) => {
  return (
    <div className={styles.info}>
      <Carousel itemsToShow={1} showArrows={false}>
        <div>
          <img className={styles.inner} src={src} alt="elem" />
        </div>
        <div>
          <img className={styles.inner} src={src} alt="elem" />
        </div>
        <div>
          <img className={styles.inner} src={src} alt="elem" />
        </div>
        <div>
          <img className={styles.inner} src={src} alt="elem" />
        </div>
      </Carousel>
      <div className={styles.info_1}>
        <span className={styles.number_1}>
          № {number}
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
            <div className={styles.checkbox}>
              <input type="checkbox" id="checkbox_1" />
              <label htmlFor="checkbox_1">Pure CSS Checkbox</label>
              <input type="checkbox" id="checkbox_1" />
              <label htmlFor="checkbox_1">Pure CSS Checkbox</label>
              <input type="checkbox" id="checkbox_1" />
              <input type="checkbox" id="checkbox_1" />
              <label htmlFor="checkbox_1">Pure CSS Checkbox</label>
              <input type="checkbox" id="checkbox_1" />
              <input type="checkbox" id="checkbox_1" />
              <label htmlFor="checkbox_1">Pure CSS Checkbox</label>
              <input type="checkbox" id="checkbox_1" />
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
            <Item number={888} rating={5} price={9990} src={photo}></Item>
            <Item number={840} rating={4} price={9990} src={photo_1}></Item>
            <Item number={980} rating={3} price={8500} src={photo_2}></Item>
            <Item number={856} rating={5} price={7300} src={photo_3}></Item>
            <Item number={740} rating={4} price={6000} src={photo_4}></Item>
            <Item number={982} rating={3} price={5800} src={photo_5}></Item>
            <Item number={678} rating={5} price={5500} src={photo_6}></Item>
            <Item number={450} rating={4} price={5300} src={photo_7}></Item>
            <Item number={350} rating={3} price={5000} src={photo_8}></Item>
            <Item number={666} rating={5} price={5000} src={photo_9}></Item>
            <Item number={444} rating={3} price={5000} src={photo_10}></Item>
            <Item number={652} rating={3} price={5000} src={photo_11}></Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
