'use client';

import Link from 'next/link';

import classNames from 'classnames';

import { useSelector } from 'react-redux';

import { selectProducts } from 'reduxStore/checkout/checkoutSlice';

import CartIcon from 'components/assets/icons/CartIcon';

import { CHECKOUT_PATH } from 'constants/navigationConstants';

import styles from './Cart.module.scss';

/**
 * Cart component.
 * A shared component (repeats across multiple pages).
 * Displays a cart icon and shows the number of products in the cart.
 */
const Cart = () => {
  const numberOfProducts = useSelector(selectProducts).reduce(
    (acc, currElement) => acc + currElement.quantity,
    0
  );

  return (
    <Link href={CHECKOUT_PATH} className={classNames('d-block', styles.cart)}>
      <CartIcon />
      <div className={styles.caption}>{numberOfProducts}</div>
    </Link>
  );
};

export default Cart;
