import React from 'react';
import styles from '@components/compLesson/app/styles.module.scss';
import Logo from '@assets/images/datadog.svg';

const HeaderLesson = ({}) => {
  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src={Logo} alt="1" />
    </header>
  );
};

export default HeaderLesson;
