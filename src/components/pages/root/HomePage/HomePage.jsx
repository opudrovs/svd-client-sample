import BundlesPreview from './BundlesPreview';

import Page from 'components/shared/Page';

import {
  COMPANY_NAME,
  PRODUCT_META_DESCRIPTION_END,
} from 'constants/textConstants';

import styles from './HomePage.module.scss';

import dataBundles from 'data/bundles.json';

/**
 * Home page.
 */
const HomePage = () => (
  <Page
    seoTitle={`${COMPANY_NAME} - Large Professional High-Quality Graphic Bundles`}
    seoDescription={PRODUCT_META_DESCRIPTION_END}
  >
    <main className="row">
      <div className="col-12">
        <h1 className={styles.title}>
          The Best Professional Vector Background Bundles
        </h1>
      </div>

      <div className="col-12 col-lg-10 col-xl-9 mx-lg-auto">
        <BundlesPreview data={dataBundles} />
      </div>
    </main>
  </Page>
);

export default HomePage;
