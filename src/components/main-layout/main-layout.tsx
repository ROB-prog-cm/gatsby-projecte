import React from 'react';
import styles from './main-layout.module.scss';
import RightPanel, { Element as NavElement } from '@components/right-panel';

import { graphql, useStaticQuery } from 'gatsby';
import Header from '@components/header';
import cn from 'classnames';
import Footer from '@components/footer';
type NavElementsKey = 'Getting started' | 'Examples' | 'API';

type NavElementsMap = {
  [key in NavElementsKey]: Array<NavElement>;
};

const getId = (() => {
  let count = 0;
  return () => count++;
})();

const navElementsMap: NavElementsMap = {
  Examples: [
    {
      id: getId(),
      label: 'page1',
      link: 'page1',
    },
  ],
};

type Props = {
  menuKey?: NavElementsKey;
};

const MainLayout: React.FC<Props> = ({ children, menuKey }) => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.wrap}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={cn(styles.body)}>
        <main className={styles.main}>
          <div className={styles.wrapContent}>{children}</div>
        </main>
      </div>
      <Footer></Footer>
      {/*<footer className={styles.footer}>*/}
      {/*  © {new Date().getFullYear()}*/}
      {/*</footer>*/}
    </div>
  );
};

export default React.memo(MainLayout);
