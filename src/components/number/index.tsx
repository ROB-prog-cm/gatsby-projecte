import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/main-layout';
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

interface IProps {
  siteTitle: string;
}

const Number = ({ siteTitle }: IProps) => (
  <div className={styles.number}>
    <div className={'container'}>
      <div className={'number_inner'}>
        <img className={'inner'} src={photo} alt="elem" />
        <img className={'inner'} src={photo_1} alt="elem" />
        <img className={'inner'} src={photo_2} alt="elem" />
        <img className={'inner'} src={photo_3} alt="elem" />
        <img className={'inner'} src={photo_4} alt="elem" />
        <img className={'inner'} src={photo_5} alt="elem" />
        <img className={'inner'} src={photo_6} alt="elem" />
        <img className={'inner'} src={photo_7} alt="elem" />
        <img className={'inner'} src={photo_8} alt="elem" />
        <img className={'inner'} src={photo_9} alt="elem" />
        <img className={'inner'} src={photo_10} alt="elem" />
      </div>
    </div>
  </div>
);

export default Number;
