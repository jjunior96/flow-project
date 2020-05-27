import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <SEO title="Home" />
    <PostItem
      link="/404"
      background="red"
      category="MISC"
      date="18/05/2020"
      timeRead="5"
      title="Usando Gatsby"
      description="Aprendendo a utilizar Gatsby com um css cagado ! Bora codar"
    />
  </Layout>
);

export default IndexPage;
