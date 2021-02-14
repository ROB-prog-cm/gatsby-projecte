import React, { memo } from 'react';
import Header from '@components/header';
import Intelligence from '@components/intelligence';
import Footer from '@components/footer';
import Copyright from '@components/copyright/copyright';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Intelligence />
      <Footer />
      <Copyright />
    </div>
  );
};

export default memo(SimpleForm);
