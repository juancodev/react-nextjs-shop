import React from 'react';
import Head from 'next/head';
import ProductList from '@/containers/ProductList';
import Header from '@/components/Header';

const index = () => {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <Header />
      <ProductList />
    </>
  );
};

export default index;
