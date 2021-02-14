import React, { useState } from 'react';
import styles from './styles.module.scss';
import Todo from '@components/hooks2';

const Hooks = ({ props }) => {
  const todos = [
    {
      id: 1,
      completed: false,
      title: 'open react',
    },
    {
      id: 2,
      completed: false,
      title: 'open angular',
    },
    {
      id: 3,
      completed: false,
      title: 'open vue',
    },
  ];
  return <div className={styles.wrapper} />;
};

export default Hooks;
