import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import HeaderLesson from '@components/compLesson/headerLesson';
import NavLesson from '@components/compLesson/nav';
import ProfileLesson from '@components/compLesson/profileLesson';

const App = ({}) => {
  return (
    <div className={'container'}>
      <div className={styles.wrapper}>
        <HeaderLesson />
        <NavLesson />
        <ProfileLesson />
      </div>
    </div>
  );
};

export default App;
