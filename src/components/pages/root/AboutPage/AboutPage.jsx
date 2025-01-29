import { memo } from 'react';

import Page from 'components/shared/Page';

import { COMPANY_WEBSITE_URL, RESUME_URL } from 'constants/navigationConstants';
import { COMPANY_EMAIL_JOB, COMPANY_NAME } from 'constants/textConstants';

import styles from './AboutPage.module.scss';

/**
 * About page.
 */
const AboutPage = () => (
  <Page
    seoTitle={`React (Next.js or Gatsby) website development, graphic design automation, programmatic SEO - ${COMPANY_NAME}`}
    seoDescription="Custom software development services."
    shouldShowCart={false}
    externalContentClassName={styles.content}
  >
    <h1 className={styles.title}>About Me</h1>
    <p>
      <a href={COMPANY_WEBSITE_URL} rel="nofollow">
        My LinkedIn profile
      </a>
    </p>
    <p>
      <a href={RESUME_URL} rel="nofollow">
        My resume
      </a>
    </p>
    <h2 id="about-contact" className={styles.subtitle}>
      Contact Information
    </h2>
    <p>
      If you are interested in working with me, please drop me a message at{' '}
      <br className="d-md-none d-inline" />
      <a href={`mailto:${COMPANY_EMAIL_JOB}`}>{COMPANY_EMAIL_JOB}</a>.
    </p>
  </Page>
);

export default memo(AboutPage);
