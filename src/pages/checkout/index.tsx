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
        {state.cart.map((product: any) => {
          let date: string = product.creationAt.slice(0, 10);
          console.log(date.slice(0, 10));
          return (
            <>
              <div className={styles['Checkout-content']}>
                <div className={styles.order}>
                  <p>
                    <span>{date}</span>
                    <span>6 articles</span>
                  </p>
                  <p>${product?.price}</p>
                </div>
              </div>
              <OrderItem product={product} indexValue={product?.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
