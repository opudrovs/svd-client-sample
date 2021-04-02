/* CONSTANTS */

import { BUNDLE_PRODUCTS, PACK_PRODUCTS } from 'constants/CheckoutConstants';


/**
 * Checkout utility functions
 */

export const getBundleLicense = (bundleId, licenseId) => {
    const products = BUNDLE_PRODUCTS.filter(elementProduct => elementProduct.elementId === bundleId);

    return products.length > 0
        ?
        products[0].productLicenses.filter(elementLicense => elementLicense.id === licenseId)[0]
        :
        null;
};

export const getPackLicense = (licenseId) => {
    return PACK_PRODUCTS.filter(elementLicense => elementLicense.id === licenseId)[0];
};

export const getFormattedPrice = (price) => {
    return `${price}.00`;
};

export const getFormattedDiscount = (discount) => {
    return `${discount}%`;
};
