import React, { useContext } from 'react';
import AppContext from '@/context/AppContext';
import Image from 'next/image';
import buttonAddToCart from '@/icons/bt_add_to_cart.svg';
import styles from '@/styles/ProductItem.module.scss';

const ProductItem = ({ product }: any) => {
  const { addToCart }: any = useContext(AppContext);

  const handleClick = (item: unknown) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width={640} height={480} />
      <div className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <div className={styles['product-info']}>
        <p>{product.price}$</p>
        <p>{product.title}</p>
        <figure onClick={() => handleClick(product)} role="presentation">
          <Image src={buttonAddToCart} alt="cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
