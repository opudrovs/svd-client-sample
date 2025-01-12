import { memo } from 'react';

import Page from 'components/shared/Page';

import {
  COMPANY_NAME,
  PRODUCT_META_DESCRIPTION_END,
} from 'constants/textConstants';

import styles from './TermsPage.module.scss';

/**
 * Terms page.
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
