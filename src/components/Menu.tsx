import React from 'react';
import Link from 'next/link';
import styles from 'styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/checkout" legacyBehavior>
            My orders
          </Link>
        </li>
        <li>
          <Link href="/" legacyBehavior>
            My account
          </Link>
        </li>
        <li>
          <Link href="/login">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
