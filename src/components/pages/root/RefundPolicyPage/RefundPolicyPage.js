import Page from 'components/shared/Page/Page';

import { COMPANY_NAME, PRODUCT_META_DESCRIPTION_END } from 'constants/TextConstants';

import styles from './RefundPolicyPage.module.scss';

/**
 * Container for the Refund Policy page.
 * Contains all other components on the page.
 */

const RefundPolicyPage = () => (
    <Page
        seoTitle={`Refund Policy - ${COMPANY_NAME}`}
        seoDescription={PRODUCT_META_DESCRIPTION_END}
    >
        <h1 className={styles.title}>{COMPANY_NAME} Refund Policy</h1>

        <p>Refund policy text (not included in the demo).</p>
    </Page>
);

export default RefundPolicyPage;
