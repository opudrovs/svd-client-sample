import { useState } from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

import ReactSelect from 'react-select';

import ButtonContainer from 'components/common/ButtonContainer/ButtonContainer';

import { LICENSES } from 'constants/CheckoutConstants';
import { SECURE_CHECKOUT } from 'constants/TextConstants';
import { BUTTON_THEME_GREEN } from 'constants/UiConstants';

import { getFormattedPrice, getFormattedDiscount } from 'utils/CheckoutUtils';

import styles from './AddToCart.module.scss';

/**
 * AddToCart component.
 */

const AddToCart = ({ externalClassName, getProductLicense }) => {
    const selectOptions = [
        {
            value: LICENSES.COMMERCIAL.id,
            label: `${LICENSES.COMMERCIAL.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSES.COMMERCIAL.id).price.usd)}`
        },
        {
            value: LICENSES.EXTENDED.id,
            label: `${LICENSES.EXTENDED.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSES.EXTENDED.id).price.usd)}`
        },
        {
            value: LICENSES.APP.id,
            label: `${LICENSES.APP.name} LICENSE $${getFormattedPrice(getProductLicense(LICENSES.APP.id).price.usd)}`
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

    const [state, setState] = useState({
        license: LICENSES.COMMERCIAL,
        selectedOption: selectOptions[0]
    });

    const { license, selectedOption } = state;

    const addToCart = () => {

    };

    const onSelectChangeHandler = (selectedOption) => {
        let license = license;

        for (const prop in LICENSES) {
            if (Object.prototype.hasOwnProperty.call(LICENSES, prop) && selectedOption.value === LICENSES[prop].id) {
                license = LICENSES[prop];
            }
        }

        setState({
            ...state,
            selectedOption: selectedOption,
            license: license
        });
    };

    const productLicense = getProductLicense(license.id);

    return (
        <div className={externalClassName}>
            <h2 className={styles.title}>Checkout</h2>

            <div className={classNames(
                'd-flex align-items-center',
                styles.price
            )}>
                <span>${getFormattedPrice(productLicense.price.usd)}</span>
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
                theme={BUTTON_THEME_GREEN}
                onClickHandler={addToCart}
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
    productPassthrough: PropTypes.string.isRequired,
    productTitle: PropTypes.string,
    externalClassName: PropTypes.string,
    getProductLicense: PropTypes.func.isRequired
};

export default AddToCart;
