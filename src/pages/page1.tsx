import React, { memo } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import Copyright from '@components/copyright/copyright';
import Choice from '@components/choice/choice';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Choice />
      <Footer />
      <Copyright />
    </div>
  );
};

export default memo(SimpleForm);
