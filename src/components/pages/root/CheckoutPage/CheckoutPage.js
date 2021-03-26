/* SHARED COMPONENTS */

import Page from 'components/shared/Page';

/* CONSTANTS */

import { COMPANY_EMAIL_SUPPORT, COMPANY_NAME } from 'constants/TextConstants';

/* STYLES */

import styles from './CheckoutPage.module.scss';


/**
 * Container for the Checkout page.
 * Contains all other components on the page.
 */

const CheckoutPage = () => {

    return (
        <Page
            seoTitle={`Secure Checkout - ${COMPANY_NAME}`}
            seoDescription=""
            externalContentClassName={styles.content}
        >
            <h1 className={styles.title}>Your Cart</h1>

            <p>Items in cart.</p>

            <p>If there is a problem with your order, please send a message with your order number to <a
                href={`mailto:${COMPANY_EMAIL_SUPPORT}`}>{COMPANY_EMAIL_SUPPORT}</a>.</p>
        </Page>
    );
};

export default CheckoutPage;
