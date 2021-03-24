import BundlesPreview from './BundlesPreview/BundlesPreview';

import Page from 'components/shared/Page/Page';

import { COMPANY_NAME } from 'constants/TextConstants';

import styles from './BundlesPageContainer.module.scss';

import dataBundles from 'data/bundles/bundles.js';

/**
 * Container for the Bundles page.
 * Contains all other components on the page.
 */

const BundlesPageContainer = () => (
    <Page
        seoTitle={`Graphic Design Bundles - ${COMPANY_NAME}`}
        seoDescription="Huge affordable graphic design bundles with a commercial or print-on-demand license."
    >
        <main className="row">
            <div className="col-12">
                <h1 className={styles.title}>Exclusive Graphic Design Bundles</h1>
            </div>

            <div className="col-12 col-lg-10 col-xl-9 mx-lg-auto">
                <BundlesPreview data={dataBundles} />
            </div>
        </main>
    </Page>
);

export default BundlesPageContainer;
