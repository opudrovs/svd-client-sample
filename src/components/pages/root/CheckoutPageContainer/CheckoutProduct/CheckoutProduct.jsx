import PropTypes from 'prop-types';

import classNames from 'classnames';

import CloseIcon from 'components/assets/icons/CloseIcon';

import styles from './CheckoutProduct.module.scss';

/**
 * Checkout product component.
 */
const CheckoutProduct = ({ title, quantity, onRemoveHandler }) => {
  return (
    <div
      className={classNames(
        'd-flex justify-content-between',
        styles.checkoutProduct
      )}
    >
      <div>
        <p>Product: {title}</p>
        <p>Amount: {quantity}</p>
      </div>
      <div
        className={classNames(
          'd-flex align-items-center',
          styles.removeProductIconContainer
        )}
      >
        <div
          className={classNames(
            'd-flex justify-content-center align-items-center',
            styles.removeProductIcon
          )}
          onClick={onRemoveHandler}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

CheckoutProduct.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemoveHandler: PropTypes.func.isRequired,
};

export default CheckoutProduct;
