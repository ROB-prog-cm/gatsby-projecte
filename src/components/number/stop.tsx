import styles from '@components/number/styles.module.scss';
import Carousel from 'react-elastic-carousel';
import photo from '@assets/images/image1.jpg';
import photo_1 from '@assets/images/image2.jpg';
import photo_2 from '@assets/images/image3.jpg';
import photo_3 from '@assets/images/image4.jpg';
import photo_4 from '@assets/images/image5.jpg';
import photo_5 from '@assets/images/image6.jpg';
import photo_6 from '@assets/images/image7.jpg';
import photo_7 from '@assets/images/image8.jpg';
import photo_8 from '@assets/images/image9.jpg';
import photo_9 from '@assets/images/image10.jpg';
import photo_10 from '@assets/images/image11.jpg';
import photo_11 from '@assets/images/image12.jpg';
import * as React from 'react';

<div className={styles.wrap}>
  {/* <span className={styles.header}>
            Номера, которые мы для вас подобрали
          </span>*/}
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 888<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>9 990₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>145 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_1} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_1} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_1} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_1} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 840<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>9 990₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={4}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>65 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_2} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_2} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_2} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_2} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 980<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>8 500₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={3}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>35 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_3} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_3} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_3} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_3} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 856<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>7 300₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>19 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_4} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_4} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_4} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_4} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 740<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>6 000₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={4}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>44 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_5} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_5} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_5} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_5} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 700<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>5000 в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={4}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>84 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_6} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_6} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_6} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_6} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 982<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>5800₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={3}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>56 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_7} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_7} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_7} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_7} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 666<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>6990₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>200 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_8} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_8} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_8} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_8} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 400<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>3 990₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={3}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>45 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_9} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_9} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_9} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_9} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 900<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>9 990₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={4}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>5 Отзывов</span>
    </div>
  </div>
  <div className={styles.info}>
    <Carousel itemsToShow={1} showArrows={false}>
      <div>
        <img className={styles.inner} src={photo_10} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_10} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_10} alt="elem" />
      </div>
      <div>
        <img className={styles.inner} src={photo_10} alt="elem" />
      </div>
    </Carousel>
    <div className={styles.info_1}>
      <span className={styles.number_1}>
        № 868<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>7 990₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={4}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>15 Отзывов</span>
    </div>
  </div>
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
        № 508<span className={styles.color}>люкс</span>
      </span>
      <span className={styles.price}>5 990₽ в сутки</span>
    </div>
    <div className={styles.info_2}>
      <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="1px"
        starRatedColor={'#8BA4F9'}
      />
      <span className={styles.reviews}>30 Отзывов</span>
    </div>
  </div>
</div>;


<Item number={888} rating={5} price={9990} src={photo_1}></Item>
<Item number={840} rating={4} price={9990} src={photo_2}></Item>
<Item number={980} rating={3} price={8500} src={photo_3}></Item>
<Item number={856} rating={5} price={7300} src={photo_4}></Item>
<Item number={740} rating={4} price={6000} src={photo_5}></Item>
<Item number={982} rating={3} price={5800} src={photo_6}></Item>
<Item number={678} rating={5} price={5500} src={photo_7}></Item>
<Item number={450} rating={4} price={5300} src={photo_8}></Item>
<Item number={350} rating={3} price={5000} src={photo_9}></Item>
<Item number={666} rating={5} price={5000} src={photo_10}></Item>
<Item number={444} rating={3} price={5000} src={photo_11}></Item>
<Item number={652} rating={3} price={5000} src={photo_11}></Item>