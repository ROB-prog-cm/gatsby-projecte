import React, { memo } from 'react';
import Layout from '@components/main-layout';
import Header from '@components/header';
import Rooms from '@components/number';
import Footer from '@components/footer';
import Copyright from '@components/copyright/copyright';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header></Header>
      <Rooms></Rooms>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );

  /* return <Layout menuKey="Examples">page 1c3423d4r3</Layout>;*/
};

export default memo(SimpleForm);
