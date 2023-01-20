import React from 'react';
import ProductItem from '@/components/ProductItem';
import useGetProducts from '@/hooks/useGetProducts';
import styles from '@/styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList: React.FunctionComponent = () => {
  const products: object[] = useGetProducts(API);
  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product: any) => {
          if (
            product.images.length > 0 &&
            product.images[0] !== '' &&
            product.images[0] !== 'asdfa' &&
            product.images[0] !== 'asdfaf' &&
            product.images[0] !== 'hjk' &&
            product.images[0] !== 'none' &&
            product.images[0] !== 'ggggg' &&
            product.images[0] !== 'adsct.gif' &&
            product.images[0] !== 'orders.png' &&
            product.images[0] !== 'logo-nestjs.pxm' &&
            product.images[0] !== 'test.png' &&
            product.images[0] !== 'image-error.jpg' &&
            product.images[0] !== 'next.png' &&
            !product.images[0].includes('https://cdn1.coppel.com/images/catalog/pm/')
          ) {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
