import Page from 'components/shared/Page/Page';

import {
    COMPANY_NAME,
    PRODUCT_META_DESCRIPTION_END
} from 'constants/TextConstants';

import styles from './LicensePage.module.scss';

/**
 * Container for the License page.
 * Contains all other components on the page.
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

export default LicensePage;
