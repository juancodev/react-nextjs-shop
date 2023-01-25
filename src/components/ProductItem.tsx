import React, { useContext } from 'react';
import AppContext from '@/context/AppContext';
import Image from 'next/image';
import buttonAddToCart from '@/icons/bt_add_to_cart.svg';
import buttonAddedToCart from '@/icons/bt_added_to_cart.svg';
import styles from '@/styles/ProductItem.module.scss';

const ProductItem = ({ handleDetailToggle, product }: any) => {
  const { addToCart, addToDetail, state }: any = useContext(AppContext);

  const handleClick = (item: unknown) => {
    addToCart(item);
  };

  const handleProductDetail = (product: unknown) => {
    addToDetail(product);
    handleDetailToggle('open');
  };

  return (
    <div className={styles.ProductItem}>
      <figure className={styles['product-card-img']} onClick={() => handleProductDetail(product)} role="presentation">
        <Image src={product.images[0]} alt={product.title} width={640} height={480} />
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </figure>
      <div className={styles['product-info']}>
        <p>${product.price}</p>
        <p>{product.title}</p>
        <figure onClick={() => handleClick(product)} role="presentation">
          {state.cart.includes(product) ? (
            <Image className={`${styles.disabled} ${styles['add-to-cart-btn']}`} src={buttonAddedToCart} alt="added to cart" />
          ) : (
            <Image className={`${styles['add-to-cart-btn']} ${styles.pointer}`} src={buttonAddToCart} alt="add to cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
