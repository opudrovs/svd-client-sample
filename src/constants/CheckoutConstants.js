/**
 * Checkout constants
 */

export const LICENSE = {
    commercial: {
        id: 'commercial',
        name: 'COMMERCIAL'
    },
    extended: {
        id: 'extended',
        name: 'EXTENDED/POD'
    },
    app: {
        id: 'app',
        name: 'APP'
    }
};

export const BUNDLE_PRODUCTS = [
    {
        elementId: 'solidsTinted0001',
        productLicenses: [
            {
                id: LICENSE.commercial.id,
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
                id: LICENSE.extended.id,
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
                id: LICENSE.app.id,
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
                id: LICENSE.commercial.id,
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
                id: LICENSE.extended.id,
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
                id: LICENSE.app.id,
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
        id: LICENSE.commercial.id,
        price: {
            usd: '4'
        },
        productId: '643840'
    },
    {
        id: LICENSE.extended.id,
        price: {
            usd: '8'
        },
        productId: '643841'
    },
    {
        id: LICENSE.app.id,
        price: {
            usd: '24'
        },
        productId: '643842'
    }
];
