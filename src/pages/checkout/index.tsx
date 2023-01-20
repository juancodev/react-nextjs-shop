import React, { useContext } from 'react';
import OrderItem from '@/components/OrderItem';
import AppContext from '@/context/AppContext';
import styles from '@/styles/Checkout.module.scss';

const Checkout = () => {
  const { state }: any = useContext(AppContext);
  console.log({ state });
  return (
    <div className={styles.Checkout}>
      <div className={styles['Checkout-container']}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles['Checkout-content']}>
          <div className={styles.order}>
            <p>
              <span>{state.cart[0]?.creationAt}</span>
              <span>6 articles</span>
            </p>
            <p>{state.cart[0]?.price}</p>
          </div>
        </div>
        <OrderItem product={state.cart[0]} indexValue={state.cart[0]?.id} />
      </div>
    </div>
  );
};

export default Checkout;
