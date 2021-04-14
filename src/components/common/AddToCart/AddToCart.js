/* REACT */

import { useState } from 'react';

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

import { useDispatch } from 'react-redux';
import ReactSelect from 'react-select';

/* REDUX */

import { addProduct } from 'redux/checkout/checkoutSlice';

/* COMMON COMPONENTS */

import ButtonContainer from 'components/common/ButtonContainer';

/* CONSTANTS */

import { LICENSE } from 'constants/CheckoutConstants';
import { SECURE_CHECKOUT } from 'constants/TextConstants';
import { BUTTON_THEME } from 'constants/UiConstants';

/* UTILS */

import { getFormattedDiscount, getFormattedPrice } from 'utils/CheckoutUtils';

/* STYLES */

import styles from './AddToCart.module.scss';


/**
 * AddToCart component.
 */

const AddToCart = ({ productTitle, externalClassName, getProductLicense }) => {
    const selectOptions = [
        {
            value: LICENSE.commercial.id,
            label: `${LICENSE.commercial.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSE.commercial.id).price.usd)}`
        },
        {
            value: LICENSE.extended.id,
            label: `${LICENSE.extended.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSE.extended.id).price.usd)}`
        },
        {
            value: LICENSE.app.id,
            label: `${LICENSE.app.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSE.app.id).price.usd)}`
        }
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
            'paddingRight': 0,
            'paddingLeft': '8px'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            'paddingRight': '4px',
            'paddingLeft': 0
        })
    };

    const dispatch = useDispatch();

    const [state, setState] = useState({
        license: LICENSE.commercial,
        selectedOption: selectOptions[0]
    });

    const { license, selectedOption } = state;

    const onSelectChangeHandler = selectedOption => {
        let license = license;

        for (const prop in LICENSE) {
            if (Object.prototype.hasOwnProperty.call(LICENSE, prop) && selectedOption.value === LICENSE[prop].id) {
                license = LICENSE[prop];
            }
        }

        setState({
            ...state,
            selectedOption: selectedOption,
            license: license
        });
    };

    const productLicense = getProductLicense(license.id);

    const productPrice = getFormattedPrice(productLicense.price.usd);

    return (
        <div className={externalClassName}>
            <h2 className={styles.title}>Checkout</h2>

            <div className={classNames(
                'd-flex align-items-center',
                styles.price
            )}>
                <span>${productPrice}</span>
                {productLicense.fullPrice
                    &&
                    <>
                        <span>&nbsp;</span>
                        <span><s className={styles.fullPrice}>${getFormattedPrice(productLicense.fullPrice.usd)}</s></span>
                        <span>&nbsp;</span>
                        <span className={styles.discount}>{getFormattedDiscount(productLicense.discount)} off</span>
                    </>}
            </div>

            <ReactSelect
                /* Passing instanceId prop is required for preventing id mismatch warning with SSR. */
                instanceId="license-select"
                options={selectOptions}
                value={selectedOption}
                isSearchable={false}
                components={{
                    IndicatorSeparator: () => null
                }}
                className={styles.select}
                styles={selectStyles}
                onChange={onSelectChangeHandler}
            />

            <ButtonContainer
                externalClassName={styles.addToCartButton}
                theme={BUTTON_THEME.green}
                onClickHandler={() => dispatch(addProduct({
                    id: `${productLicense.productId}_${productTitle}`,
                    title: `${productTitle} ${productLicense.id.toUpperCase()} LICENSE`,
                    price: productPrice
                }))}
            >
                Add to Cart
            </ButtonContainer>

            <div className={styles.disclaimer}>
                {SECURE_CHECKOUT}
            </div>
        </div>
    );
};

AddToCart.propTypes = {
    productTitle: PropTypes.string.isRequired,
    externalClassName: PropTypes.string,
    getProductLicense: PropTypes.func.isRequired
};

export default AddToCart;
