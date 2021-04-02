/* REACT */

import { memo } from 'react';

/* SHARED COMPONENTS */

import Page from 'components/shared/Page';

/* CONSTANTS */

import { COMPANY_NAME, PRODUCT_META_DESCRIPTION_END } from 'constants/TextConstants';

/* STYLES */

import styles from './TermsPage.module.scss';


/**
 * Container for the Terms page.
 * Contains all other components on the page.
 */

const TermsPage = () => (
    <Page
        seoTitle={`Terms of Service - ${COMPANY_NAME}`}
        seoDescription={PRODUCT_META_DESCRIPTION_END}
        externalContentClassName={styles.content}
    >
        <h1 className={styles.title}>{COMPANY_NAME} Terms of Service</h1>

        <p>Terms text (not included in the demo).</p>
    </Page>
);

export default memo(TermsPage);
