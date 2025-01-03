import { memo } from 'react';

import Page from 'components/shared/Page';

import {
  COMPANY_NAME,
  PRODUCT_META_DESCRIPTION_END,
} from 'constants/textConstants';

import styles from './FaqPage.module.scss';

/**
 * FAQ page.
 */
const FaqPage = () => (
  <Page
    seoTitle={`Frequently Asked Questions - ${COMPANY_NAME}`}
    seoDescription={PRODUCT_META_DESCRIPTION_END}
    externalContentClassName={styles.content}
  >
    <h1 className={styles.title}>Frequently Asked Questions</h1>

    <div className={styles.answer}>
      <h2 id="answer-1" className={styles.subtitle}>
        <span className={styles.question}>
          1. How do you create your image packs?
        </span>
      </h2>

      <p>
        I create all image templates manually, with the help of Adobe
        Illustrator or Inkscape, then recolor them with my lists of carefully
        selected colors, and re-export them as SVG, PNG, and EPS image files
        with my custom scripts and command-line utilities to create image packs.
      </p>

      <p>
        This allows me to create large image packs and bundles without
        sacrificing image quality.
      </p>
    </div>

    <div className={styles.divider} />

    <div className={styles.answer}>
      <h2 id="answer-2" className={styles.subtitle}>
        <span className={styles.question}>2. Question 2</span>
      </h2>

      <p>Answer 2</p>
    </div>
  </Page>
);

export default memo(FaqPage);
