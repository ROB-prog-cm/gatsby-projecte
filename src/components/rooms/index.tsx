import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import StarRatings from 'react-star-ratings';
import Paginate from '@components/pagination';
import Calendar from '@components/calendar';

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

const Button = ({}) => {
  /*  return (

    )*/
};

const Item = ({ number, rating, price, src, reviews, luxury }) => {
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
          <span className={styles.color}>{luxury}</span>
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
          luxury={'люкс'}
        />
        <Item number={840} rating={4} price={9990} reviews={65} src={photo_1} />
        <Item
          number={980}
          rating={3}
          price={8500}
          reviews={35}
          src={photo_2}
          luxury={'люкс'}
        />
        <Item number={856} rating={5} price={7300} reviews={19} src={photo_3} />
        <Item number={740} rating={4} price={6000} reviews={44} src={photo_4} />
        <Item number={982} rating={3} price={5800} reviews={56} src={photo_5} />
        <Item number={678} rating={5} price={5500} reviews={45} src={photo_6} />
        <Item number={450} rating={4} price={5300} reviews={39} src={photo_7} />
        <Item number={350} rating={3} price={5000} reviews={77} src={photo_8} />
        <Item number={666} rating={5} price={5000} reviews={25} src={photo_9} />
        <Item
          number={444}
          rating={3}
          price={5000}
          reviews={15}
          src={photo_10}
        />
        <Item
          number={652}
          rating={3}
          price={5000}
          reviews={55}
          src={photo_11}
        />
      </div>
      <div className={styles.paginate_blog}>
        <Paginate />
        <span className={styles.paginate_text}>
          1 – 12 из 100+ вариантов аренды
        </span>
      </div>
    </div>
  );
};

export default Rooms;
