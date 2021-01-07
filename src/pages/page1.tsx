import React, { memo } from 'react';
import Layout from '@components/main-layout';
import Header from '@components/header';
import Footer from '@components/footer';
import Copyright from '@components/copyright/copyright';
import Choice from '@components/choice/choice';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header></Header>
      <Choice></Choice>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );

  /* return <Layout menuKey="Examples">page 1c3423d4r3</Layout>;*/
};

export default memo(SimpleForm);
