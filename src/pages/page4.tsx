import React, { memo } from 'react';
import Header from '@components/header';
import App from '@components/compLesson/app';
import Hooks from '@components/hooks';
type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <App />
      <Hooks />
    </div>
  );
};

export default memo(SimpleForm);
