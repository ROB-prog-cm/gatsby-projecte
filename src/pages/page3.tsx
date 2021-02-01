import React, { memo } from 'react';
import Layout from '@components/main-layout';
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

  /* return <Layout menuKey="Examples">page 1c3423d4r3</Layout>;*/
};

export default memo(SimpleForm);
