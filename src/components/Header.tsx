import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/Menu';
import MyOrder from '@/containers/MyOrder';
import MenuMobile from '@/components/MenuMobile';
import menuIcon from '@/icons/icon_menu.svg';
import logo from '@/logos/logo_yard_sale.svg';
import shoppingCart from '@/icons/icon_shopping_cart.svg';
import downArrow from '@/icons/flechita.svg';
import AppContext from '@/context/AppContext';
import styles from '@/styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu]: any = useState(false);
  const { state }: any = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <nav className={styles.Nav}>
        <Image src={menuIcon.src} alt="menu" className={styles.menu} width={25} height={25} onClick={handleToggleMenu} />

        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>

          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>

        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} onClick={handleToggle} role="presentation">
              montillasanchezjuancarlos@gmail.com
              <Image src={downArrow} alt="dropdown" />
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)} role="presentation">
              <Image src={shoppingCart} alt="" />
              {state?.cart.length > 0 ? <div>{state.cart.length > 9 ? `+9` : state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
        {toggleMenu && <MenuMobile />}
      </nav>
    </>
  );
};

export default Header;
