import React from 'react';
import ProductList from '@/containers/ProductList';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />
    </>
  );
};

export default index;
