'use client';

import { useState } from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import ReactSelect from 'react-select';
import { addProduct } from 'reduxStore/checkout/checkoutSlice';

import Button from 'components/common/Buttons/Button';

import { LICENSE } from 'constants/checkoutConstants';
import { SECURE_CHECKOUT } from 'constants/textConstants';
import { BUTTON_THEME } from 'constants/uiConstants';

import { getFormattedDiscount, getFormattedPrice } from 'utils/checkoutUtils';

import styles from './AddToCart.module.scss';

/**
 * AddToCart component.
 */
const AddToCart = ({ productTitle, className, getProductLicense }) => {
  const selectOptions = [
    {
      value: LICENSE.commercial.id,
      label: `${LICENSE.commercial.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSE.commercial.id).price.usd)}`,
    },
    {
      value: LICENSE.extended.id,
      label: `${LICENSE.extended.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSE.extended.id).price.usd)}`,
    },
    {
      value: LICENSE.app.id,
      label: `${LICENSE.app.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSE.app.id).price.usd)}`,
    },
  ];

  const selectStyles = {
    option: (styles) => ({
      ...styles,
      cursor: 'pointer',
    }),
    control: (styles) => ({
      ...styles,
      cursor: 'pointer',
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingRight: 0,
      paddingLeft: '8px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingRight: '4px',
      paddingLeft: 0,
    }),
  };

  const dispatch = useDispatch();

  const [state, setState] = useState({
    license: LICENSE.commercial,
    selectedOption: selectOptions[0],
  });

  const { license, selectedOption } = state;

  const onSelectChangeHandler = (selectedOption) => {
    let license = LICENSE.commercial;

    for (const prop in LICENSE) {
      if (
        Object.hasOwn(LICENSE, prop) &&
        selectedOption.value === LICENSE[prop].id
      ) {
        license = LICENSE[prop];
        break;
      }
    }

    setState({
      ...state,
      selectedOption: selectedOption,
      license: license,
    });
  };

  const productLicense = getProductLicense(license.id);

  const productPrice = getFormattedPrice(productLicense.price.usd);

  return (
    <div className={className}>
      <h2 className={styles.title}>Checkout</h2>

      <div className={classNames('d-flex align-items-center', styles.price)}>
        <span>${productPrice}</span>
        {productLicense.fullPrice && (
          <>
            <span>&nbsp;</span>
            <span>
              <s className={styles.fullPrice}>
                ${getFormattedPrice(productLicense.fullPrice.usd)}
              </s>
            </span>
            <span>&nbsp;</span>
            <span className={styles.discount}>
              {getFormattedDiscount(productLicense.discount)} off
            </span>
          </>
        )}
      </div>

      <ReactSelect
        /* Passing instanceId prop is required for preventing id mismatch warning with SSR. */
        instanceId="license-select"
        options={selectOptions}
        value={selectedOption}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
        }}
        className={styles.select}
        styles={selectStyles}
        onChange={onSelectChangeHandler}
      />

      <Button
        theme={BUTTON_THEME.green}
        className={styles.addToCartButton}
        onClickHandler={() =>
          dispatch(
            addProduct({
              id: `${productLicense.productId}_${productTitle}`,
              title: `${productTitle} ${productLicense.id.toUpperCase()} LICENSE`,
              price: productPrice,
            })
          )
        }
      >
        Add to Cart
      </Button>

      <div className={styles.disclaimer}>{SECURE_CHECKOUT}</div>
    </div>
  );
};

AddToCart.propTypes = {
  productTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
  getProductLicense: PropTypes.func.isRequired,
};

export default AddToCart;
