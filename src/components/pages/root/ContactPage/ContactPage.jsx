import { memo } from 'react';

import Page from 'components/shared/Page';

import {
  COMPANY_EMAIL_SUPPORT,
  COMPANY_NAME,
  PRODUCT_META_DESCRIPTION_END,
} from 'constants/textConstants';

import styles from './ContactPage.module.scss';

/**
 * Contact page.
 */
const ContactPage = () => (
  <Page
    seoTitle={`Contact Information - ${COMPANY_NAME}`}
    seoDescription={PRODUCT_META_DESCRIPTION_END}
    externalContentClassName={styles.content}
  >
    <h1 className={styles.title}>Contact Information</h1>

    <p>
      Drop me a message at{' '}
      <a href={`mailto:${COMPANY_EMAIL_SUPPORT}`}>{COMPANY_EMAIL_SUPPORT}</a>{' '}
      for any job-related inquiries.
    </p>
  </Page>
);

export default memo(ContactPage);
