import { useDispatch, useSelector } from 'react-redux';

import {
  removeProduct,
  selectProducts,
} from 'reduxStore/checkout/checkoutSlice';

import CheckoutProduct from './CheckoutProduct';

import Page from 'components/shared/Page';

import { COMPANY_EMAIL_SUPPORT, COMPANY_NAME } from 'constants/textConstants';

import styles from './CheckoutPage.module.scss';

/**
 * Checkout page.
 */
const CheckoutPage = () => {
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
          products.map(({ id, title, quantity }) => (
            <CheckoutProduct
              key={id}
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

export default CheckoutPage;
