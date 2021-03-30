/* LIBRARIES */

import { useDispatch, useSelector } from 'react-redux';

/* REDUX */

import { removeProduct, selectProducts } from 'redux/checkout/checkoutSlice';

/* COMPONENTS */

import CheckoutProduct from './CheckoutProduct';

/* SHARED COMPONENTS */

import Page from 'components/shared/Page';

/* CONSTANTS */

import { COMPANY_EMAIL_SUPPORT, COMPANY_NAME } from 'constants/TextConstants';

/* STYLES */

import styles from './CheckoutPageContainer.module.scss';


/**
 * Container for the Checkout page.
 * Contains all other components on the page.
 */

const CheckoutPageContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    return (
        <Page
            seoTitle={`Secure Checkout - ${COMPANY_NAME}`}
            seoDescription=""
            shouldShowCart={false}
            externalContentClassName={styles.content}
        >
            <h1 className={styles.title}>Your Cart</h1>

            <p>
                <span className={styles.highlighted}>The cart is under construction and displays simplified data and styling.</span>
            </p>

            <div className={styles.productsContainer}>
                {products.map(({ id, title, quantity }, index) => (
                    <CheckoutProduct
                        key={`checkout-product-${index}`}
                        title={title}
                        quantity={quantity}
                        onRemoveHandler={() => dispatch(removeProduct(id))}
                    />))}
            </div>

            <p>If there is a problem with your order, please send a message with your order number to <a
                href={`mailto:${COMPANY_EMAIL_SUPPORT}`}>{COMPANY_EMAIL_SUPPORT}</a>.</p>
        </Page>
    );
};

export default CheckoutPageContainer;
