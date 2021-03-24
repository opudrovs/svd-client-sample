import { memo } from 'react';

import Page from 'components/shared/Page/Page';

import {
    COMPANY_NAME,
    PRODUCT_META_DESCRIPTION_END
} from 'constants/TextConstants';

import styles from './PrivacyPolicyPage.module.scss';

/**
 * Container for the Privacy Policy page.
 * Contains all other components on the page.
 */

const PrivacyPolicyPage = () => (
    <Page
        seoTitle={`Privacy Policy - ${COMPANY_NAME}`}
        seoDescription={PRODUCT_META_DESCRIPTION_END}
    >
        <h1 className={styles.title}>{COMPANY_NAME} Privacy Policy</h1>

        <p>Privacy policy text (not included in the demo).</p>
    </Page>
);

export default memo(PrivacyPolicyPage);
