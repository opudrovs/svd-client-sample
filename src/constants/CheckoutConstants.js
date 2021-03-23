/**
 * Checkout constants
 */

export const LICENSES = {
    COMMERCIAL: {
        id: 'commercial',
        name: 'COMMERCIAL'
    },
    EXTENDED: {
        id: 'extended',
        name: 'EXTENDED/POD'
    },
    APP: {
        id: 'app',
        name: 'APP'
    }
};

export const BUNDLE_PRODUCTS = [
    {
        elementId: 'solidsTinted0001',
        productLicenses: [
            {
                id: LICENSES.COMMERCIAL.id,
                price: {
                    usd: '39'
                },
                fullPrice: {
                    usd: '280'
                },
                productId: '643263',
                discount: '86'
            },
            {
                id: LICENSES.EXTENDED.id,
                price: {
                    usd: '79'
                },
                fullPrice: {
                    usd: '560'
                },
                productId: '643838',
                discount: '86'
            },
            {
                id: LICENSES.APP.id,
                price: {
                    usd: '239'
                },
                fullPrice: {
                    usd: '1680'
                },
                productId: '643839',
                discount: '86'
            }
        ]
    },
    {
        elementId: 'solidsOnBg0002',
        productLicenses: [
            {
                id: LICENSES.COMMERCIAL.id,
                price: {
                    usd: '39'
                },
                fullPrice: {
                    usd: '280'
                },
                productId: '643263',
                discount: '86'
            },
            {
                id: LICENSES.EXTENDED.id,
                price: {
                    usd: '79'
                },
                fullPrice: {
                    usd: '560'
                },
                productId: '643838',
                discount: '86'
            },
            {
                id: LICENSES.APP.id,
                price: {
                    usd: '239'
                },
                fullPrice: {
                    usd: '1680'
                },
                productId: '643839',
                discount: '86'
            }
        ]
    }
];

export const PACK_PRODUCTS = [
    {
        id: LICENSES.COMMERCIAL.id,
        price: {
            usd: '4'
        },
        productId: '643840'
    },
    {
        id: LICENSES.EXTENDED.id,
        price: {
            usd: '8'
        },
        productId: '643841'
    },
    {
        id: LICENSES.APP.id,
        price: {
            usd: '24'
        },
        productId: '643842'
    }
];
