/* LIBRARIES */

const classNames = require('classnames');

import { useSelector } from 'react-redux';

/* REDUX */

import { selectProducts } from 'redux/checkout/checkoutSlice';

/* ASSET COMPONENTS */

import CartIcon from 'components/assets/icons/CartIcon';

/* CONSTANTS */

import { CHECKOUT_PATH } from 'constants/NavigationConstants';

/* STYLES */

import styles from './Cart.module.scss';


/**
 * Cart component.
 * A shared component (repeats across multiple pages).
 * Displays a cart icon and shows the number of products in the cart.
 */

const Cart = () => {
    const numberOfProducts = useSelector(selectProducts).reduce((acc, currElement) => acc + currElement.quantity, 0);

    return (
        <a
            href={CHECKOUT_PATH}
            className={classNames(
                'd-block',
                styles.cart
            )}
        >
            <CartIcon />
            <div className={styles.caption}>{numberOfProducts}</div>
        </a>
    );
};

export default Cart;
