import React, { memo } from 'react';
import Layout from '@components/main-layout';
import Header from '@components/header';
import Number from '@components/number';

type Props = {};
const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header></Header>
      <Number></Number>
    </div>
  );

  /* return <Layout menuKey="Examples">page 1c3423d4r3</Layout>;*/
};

export default memo(SimpleForm);
