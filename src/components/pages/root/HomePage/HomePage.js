/* SHARED COMPONENTS */

import Page from 'components/shared/Page';

/* COMPONENTS */

import BundlesPreview from 'components/pages/root/BundlesPageContainer/BundlesPreview';

/* CONSTANTS */

import { ABOUT_PATH } from 'constants/NavigationConstants';
import { COMPANY_NAME, PRODUCT_META_DESCRIPTION_END } from 'constants/TextConstants';

/* STYLES */

import styles from './HomePage.module.scss';

/* DATA */

import dataBundles from 'data/bundles/bundles.js';


/**
 * Container for the Home page.
 * Contains all other components on the page.
 */

const HomePage = () => (
    <Page
        seoTitle={`${COMPANY_NAME} - Large Professional High-Quality Background Bundles`}
        seoDescription={PRODUCT_META_DESCRIPTION_END}
    >
        <main className="row">
            <div className="col-12">
                <h1 className={styles.title}>The Best Professional Vector Background Bundles</h1>
            </div>

            <div className="col-12 col-lg-10 col-xl-9 mx-lg-auto">
                <BundlesPreview data={dataBundles} />
            </div>
        </main>

        <div className="row">
            <div className="col">
                <h2 className={styles.subtitle}>Custom Software Development Services</h2>

                <p>If you need a React website or would like to automate repetitive graphic design tasks, please have a look at the <a href={ABOUT_PATH} className={styles.link}>Hire Me!</a> page for more information.</p>
            </div>
        </div>
    </Page>
);

export default HomePage;
