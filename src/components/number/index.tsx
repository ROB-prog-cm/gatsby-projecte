import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import ReactSlider from 'react-slider';
import StarRatings from 'react-star-ratings';
import ReactPaginate from 'react-paginate';

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

const Paginate = ({}) => {
  function handlePageClick(data) {
    console.log(data);
  }

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={
        <span className={styles.arrow}>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0.426758L17.0156 8.44238L9 16.458L7.59375 15.0518L13.1719 9.42676H0.984375V7.45801H13.1719L7.59375 1.83301L9 0.426758Z"
              fill="white"
            />
          </svg>
        </span>
      }
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={100}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      nextLinkClassName={styles.next_link}
    />
  );
};
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

const Item = ({ number, rating, price, src, reviews }) => {
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
          <span className={styles.span_n}>№ </span>
          {number}
          <span className={styles.color}>люкс</span>
        </span>
        <span className={styles.price}>{price}₽ в сутки</span>
      </div>
      <div className={styles.info_2}>
        <Star rating={rating} />
        <span className={styles.reviews}>{reviews} Отзывов</span>
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
                defaultValue={[40, 70]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}></div>}
                pearling
                minDistance={10}
              />
              <span className={styles.day}>
                Стоимость за сутки пребывания в номере
              </span>
            </div>

            <div className={styles.checkbox}>
              <span className={styles.span}>правила дома</span>
              <input className={styles.input} type="checkbox" id="checkbox_1" />
              <label className={styles.label} htmlFor="checkbox_1">
                Можно курить
              </label>
              <input className={styles.input} type="checkbox" id="checkbox_2" />
              <label className={styles.label} htmlFor="checkbox_2">
                Можно с питомцами
              </label>
              <input className={styles.input} type="checkbox" id="checkbox_3" />
              <label className={styles.label} htmlFor="checkbox_3">
                Можно пригласить гостей (до 10 человек)
              </label>
              <span className={styles.span}>доступность</span>
              <input className={styles.input} type="checkbox" id="checkbox_4" />
              <label className={styles.label} htmlFor="checkbox_4">
                <span className={styles.span_1}>Широкий коридор</span>
                Ширина коридоров в номере не менее 91 см.
              </label>
              <input className={styles.input} type="checkbox" id="checkbox_5" />
              <label className={styles.label} htmlFor="checkbox_5">
                <span className={styles.span_1}>Помощник для инвалидов</span>
                На 1 этаже вас встретит специалист и проводит до номера.
              </label>
            </div>
            <div className="dd-wrapper">
              <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => !open}
                onClick={() => !open}
              >
                <div className="dd-header__title">
                  <p className="dd-header__title_bold">{}</p>
                </div>
                <div className="dd-header__action">
                  <p>{open ? 'Close' : 'Open'}</p>
                </div>
              </div>
              {open && (
                <ul className="dd-list">
                  {item => (
                    <li className="dd-list-item" key={item.id}>
                      <button type="button" onClick={() => item}>
                        <span>{item.value}</span>
                        <span>{item && 'Selected'}</span>
                      </button>
                    </li>
                  )}
                </ul>
              )}
            </div>
            <span className={styles.date}>удобства номера</span>
            <select className={styles.option_1}>
              <option value="1">
                <button>1</button>
                <button>2</button>
              </option>
              <option value="2">2 спальни, 2 кровати...</option>
              <option value="2">2 спальни, 2 кровати...</option>
            </select>
            <select className={styles.option_2}>
              <option value="1"> дополнительные удобства</option>
            </select>
          </div>
          <div className={styles.wrap}>
            <span className={styles.header}>
              Номера, которые мы для вас подобрали
            </span>
            <div className={styles.wrap__inner}>
              <Item
                number={888}
                rating={5}
                price={9990}
                reviews={145}
                src={photo}
              ></Item>
              <Item
                number={840}
                rating={4}
                price={9990}
                reviews={65}
                src={photo_1}
              ></Item>
              <Item
                number={980}
                rating={3}
                price={8500}
                reviews={35}
                src={photo_2}
              ></Item>
              <Item
                number={856}
                rating={5}
                price={7300}
                reviews={19}
                src={photo_3}
              ></Item>
              <Item
                number={740}
                rating={4}
                price={6000}
                reviews={44}
                src={photo_4}
              ></Item>
              <Item
                number={982}
                rating={3}
                price={5800}
                reviews={56}
                src={photo_5}
              ></Item>
              <Item
                number={678}
                rating={5}
                price={5500}
                reviews={45}
                src={photo_6}
              ></Item>
              <Item
                number={450}
                rating={4}
                price={5300}
                reviews={39}
                src={photo_7}
              ></Item>
              <Item
                number={350}
                rating={3}
                price={5000}
                reviews={77}
                src={photo_8}
              ></Item>
              <Item
                number={666}
                rating={5}
                price={5000}
                reviews={25}
                src={photo_9}
              ></Item>
              <Item
                number={444}
                rating={3}
                price={5000}
                reviews={15}
                src={photo_10}
              ></Item>
              <Item
                number={652}
                rating={3}
                price={5000}
                reviews={55}
                src={photo_11}
              ></Item>
            </div>
          </div>
          <Paginate></Paginate>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
