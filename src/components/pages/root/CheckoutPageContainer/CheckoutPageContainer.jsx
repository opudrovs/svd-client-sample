import { useDispatch, useSelector } from 'react-redux';

import { removeProduct, selectProducts } from 'redux/checkout/checkoutSlice';

import CheckoutProduct from './CheckoutProduct';

import Page from 'components/shared/Page';

import { COMPANY_EMAIL_SUPPORT, COMPANY_NAME } from 'constants/textConstants';

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

      <div className={styles.productsContainer}>
        {products.length > 0 ? (
          products.map(({ id, title, quantity }, index) => (
            <CheckoutProduct
              key={`checkout-product-${index}`}
              title={title}
              quantity={quantity}
              onRemoveHandler={() => dispatch(removeProduct(id))}
            />
          ))
        ) : (
          <span className={styles.highlighted}>Your cart is empty.</span>
        )}
      </div>

      <p>
        If there is a problem with your order, please send a message with your
        order number to{' '}
        <a href={`mailto:${COMPANY_EMAIL_SUPPORT}`}>{COMPANY_EMAIL_SUPPORT}</a>.
      </p>
    </Page>
  );
};

export default CheckoutPageContainer;
