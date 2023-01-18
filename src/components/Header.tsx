import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/Menu';
import MyOrder from '@/containers/MyOrder';
import menuIcon from '@/icons/icon_menu.svg';
import logo from '@/logos/logo_yard_sale.svg';
import shoppingCart from '@/icons/icon_shopping_cart.svg';
import downArrow from '@/icons/flechita.svg';
import AppContext from '@/context/AppContext';
import styles from '@/styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={styles.Nav}>
      <Image src={menuIcon} alt="menu" className={styles.menu} />

      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            montillasanchezjuancarlos@gmail.com
            <Image src={downArrow} alt="dropdown" />
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={shoppingCart} alt="" />
            {state?.cart.length > 0 ? <div>{state.cart.length > 9 ? `+9` : state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
