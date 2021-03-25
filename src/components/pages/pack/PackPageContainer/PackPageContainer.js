import { memo } from 'react';

import Page from 'components/shared/Page';

import styles from './PackPageContainer.module.scss';

/**
 * Container for the Pack page.
 * Contains all other components on the page.
 */

const PackPageContainer = () => (
    <Page
        seoTitle="Pack"
        seoDescription="Background pack"
    >
        <h1 className={styles.title}>Sample Pack Page</h1>

        <p>Pack data not included in the demo.</p>
    </Page>
);

export default memo(PackPageContainer);
