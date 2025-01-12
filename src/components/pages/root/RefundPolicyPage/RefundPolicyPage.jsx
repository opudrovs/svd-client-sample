import { memo } from 'react';

import Page from 'components/shared/Page';

import {
  COMPANY_NAME,
  PRODUCT_META_DESCRIPTION_END,
} from 'constants/textConstants';

import styles from './RefundPolicyPage.module.scss';

/**
 * Refund Policy page.
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

export default memo(RefundPolicyPage);
