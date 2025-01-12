import { memo } from 'react';

import Page from 'components/shared/Page';

import {
  COMPANY_NAME,
  PRODUCT_META_DESCRIPTION_END,
} from 'constants/textConstants';

import styles from './LicensePage.module.scss';

/**
 * License page.
 */
const LicensePage = () => (
  <Page
    seoTitle={`Licenses - ${COMPANY_NAME}`}
    seoDescription={PRODUCT_META_DESCRIPTION_END}
  >
    <h1 className={styles.title}>{COMPANY_NAME} Licenses</h1>

    <p>License text (not included in the demo).</p>
  </Page>
);

export default memo(LicensePage);
