import React, { memo } from 'react';
import Header from '@components/header';
import Rooms from '@components/number';
import Footer from '@components/footer';
import Copyright from '@components/copyright/copyright';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Rooms />
      <Footer />
      <Copyright />
    </div>
  );
};

export default memo(SimpleForm);
