import React from 'react';
import styles from '@components/compLesson/app/styles.module.scss';
import Logo_2 from '@assets/images/hostgator.svg';
import Logo_3 from '@assets/images/kong-icon.svg';

const ProfileLesson = ({}) => {
  return (
    <div className={styles.profile}>
      <div>
        <img src={Logo_2} alt="1" />
      </div>
      <div>ava</div>
      <div>
        post
        <div>new post</div>
      </div>
      <div>
        <div>post 1</div>
        <div>post 1</div>
      </div>
    </div>
  );
};

export default ProfileLesson;
