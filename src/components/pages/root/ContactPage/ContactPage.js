import Page from 'components/shared/Page/Page';

import { CONTACT_PATH } from 'constants/NavigationConstants';
import { COMPANY_NAME, COMPANY_EMAIL_SUPPORT, PRODUCT_META_DESCRIPTION_END } from 'constants/TextConstants';

import styles from './ContactPage.module.scss';

/**
 * Container for the Contact page.
 * Contains all other components on the page.
 */

const ContactPage = () => (
    <Page
        seoTitle={`Contact Information - ${COMPANY_NAME}`}
        seoDescription={PRODUCT_META_DESCRIPTION_END}
        pathname={CONTACT_PATH}
        externalContentClassName={styles.content}
    >
        <h1 className={styles.title}>Contact Information</h1>

        <p>
            Drop me a message at <a href={`mailto:${COMPANY_EMAIL_SUPPORT}`}>{COMPANY_EMAIL_SUPPORT}</a> for any
            support or custom software development enquiries.
        </p>
    </Page>
);

export default ContactPage;
