/* REACT */

import { memo } from 'react';

/* SHARED COMPONENTS */

import Page from 'components/shared/Page';

/* STYLES */

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
