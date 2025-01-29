'use client';

import { Fragment, useState } from 'react';

import PropTypes from 'prop-types';

import NextHead from 'next/head';

import classNames from 'classnames';
import dayjs from 'dayjs';
import htmlParser from 'html-react-parser';
import { Collapse, Card } from 'react-bootstrap';

import PackPreview from './PackPreview';

import AddToCart from 'components/common/AddToCart';
import Breadcrumbs from 'components/common/Breadcrumbs';
import ErrorMessage from 'components/common/ErrorMessage';
import ImageGallery from 'components/common/ImageGallery';
import Tags from 'components/common/Tags';

import Page from 'components/shared/Page';

import { CDN_ROOT, SCREENSHOT_IMAGE_FORMAT } from 'constants/assetConstants';
import { LICENSE } from 'constants/checkoutConstants';
import { PACK_DATA_SEAMLESS_MODE_FULL } from 'constants/dataConstants';
import {
  BUNDLE_PATH,
  COMPANY_WEBSITE_URL,
  INDEX_PATH,
} from 'constants/navigationConstants';
import {
  COLOR_DESCRIPTION_SOLIDS_NAMED,
  COLOR_LIST_SOLIDS_NAMED,
  COLOR_LIST_TITLE_SOLIDS_NAMED,
  COMPANY_NAME,
  PRODUCT_META_DESCRIPTION_END,
} from 'constants/textConstants';

import { partitionArray } from 'utils/arrayUtils';
import {
  getBundleLicense,
  getFormattedPrice,
  getPackLicense,
} from 'utils/checkoutUtils';
import { mapScreenshotToImageDataObject } from 'utils/dataUtils';
import { convertDataStringToHtml } from 'utils/stringUtils';

import styles from './BundlePage.module.scss';

/**
 * Bundle page.
 */
const BundlePage = ({ bundleData, bundlePreviewData }) => {
  const [state] = useState({
    imageData: bundleData.screenshots.map((screenshot) =>
      mapScreenshotToImageDataObject(
        screenshot,
        `${CDN_ROOT}/${screenshot.subfolder}`,
        SCREENSHOT_IMAGE_FORMAT
      )
    ),
  });
  const [open, setOpen] = useState(false);
  const { imageData } = state;

  const [seamlessPacks, notSeamlessPacks] = bundlePreviewData
    ? partitionArray(
        bundlePreviewData.packs,
        (element) => element.seamlessMode === PACK_DATA_SEAMLESS_MODE_FULL
      )
    : [null, null];
  const allPacks = bundlePreviewData ? [seamlessPacks, notSeamlessPacks] : [];
  const allPacksSubtitles = ['Seamless Packs', 'Non-Seamless Packs'];
  const metaTitle = bundleData.text.title;
  const metaDescription = `${metaTitle} - ${PRODUCT_META_DESCRIPTION_END}`;
  const bundleDescriptionHtml = [
    bundleData.text.description,
    COLOR_DESCRIPTION_SOLIDS_NAMED,
  ]
    .map((element) => convertDataStringToHtml(element, 'p'))
    .join('');

  const commercialBundleLicense = getBundleLicense(
    bundleData.elementId,
    LICENSE.commercial.id
  );
  const commercialPackLicense = getPackLicense(LICENSE.commercial.id);

  const productInfo = (
    <>
      <div className={styles.subtitle}>Product Information</div>

      <div className={styles.productInfoSubtitle}>Image Format</div>

      <Tags
        tags={bundleData.fileFormats.map((element) => element.toUpperCase())}
      />

      <div className={styles.productInfoSubtitle}>Date Published</div>

      <div>
        {dayjs(bundleData.datePublished, 'YYYY-MM-DD').format('MMMM D, YYYY')}
      </div>

      <div className={styles.productInfoSubtitle}>Date Updated</div>

      <div>
        {dayjs(bundleData.dateModified, 'YYYY-MM-DD').format('MMMM D, YYYY')}
      </div>
    </>
  );
  const bundlePrice = getFormattedPrice(
    getBundleLicense(bundleData.elementId, LICENSE.commercial.id).price.usd
  );

  return (
    <>
      <NextHead>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "SKU": "BUNDLE${bundleData.elementIdNumber}",
                        "productId": "BUNDLE${bundleData.elementIdNumber}",
                        "url": "${COMPANY_WEBSITE_URL}${BUNDLE_PATH}/${bundleData.url}",
                        "name": "${bundleData.text.title}",
                        "image": "${imageData[0].src}",
                        "description": "${bundleData.text.title} by ${COMPANY_NAME} available for $${bundlePrice} at ${COMPANY_WEBSITE_URL}",
                        "brand": "${COMPANY_NAME}",
                        "releaseDate": "${bundleData.dateModified}",
                        "category": "Software > Digital Goods",
                        "offers": [
                            {
                                "@type": "AggregateOffer",
                                "availability": "http://schema.org/InStock",
                                "lowPrice": "${bundlePrice}",
                                "highPrice": "${bundlePrice}",
                                "priceCurrency": "USD",
                                "offerCount": "1"
                            }
                        ]
                      }`,
          }}
        />
      </NextHead>
      <Page
        seoTitle={metaTitle}
        seoDescription={metaDescription}
        isContentMain={false}
      >
        {/* Main Content */}

        <main id="main" className="row">
          {/* Product Title */}

          <div className="col-12">
            <h1 className={styles.productTitle}>
              {htmlParser(bundleData.text.title.replace(' - ', ' &mdash; '))}
            </h1>

            {/* Breadcrumbs Navigation */}

            <div className={classNames('row', styles.breadcrumbsContainer)}>
              <div className="col">
                <Breadcrumbs
                  breadcrumbs={[
                    {
                      text: 'Home',
                      name: 'Home',
                      href: INDEX_PATH,
                    },
                    {
                      text: 'Bundle',
                      name: bundleData.text.title,
                      href: `${BUNDLE_PATH}/${bundleData.url}`,
                      isDataOnly: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Product Image */}

          <div
            className={classNames(
              'col-12 col-md-7 col-lg-8 d-flex flex-column align-items-center',
              styles.productPreviewContainer
            )}
          >
            <ImageGallery imageData={imageData} />
          </div>

          <div
            className={classNames('col-12 col-md-5 col-lg-4', styles.sideBar)}
          >
            {/* Add to cart */}

            <div className={styles.addToCart}>
              <AddToCart
                productTitle={bundleData.text.title}
                getProductLicense={(licenseId) =>
                  getBundleLicense(bundleData.elementId, licenseId)
                }
              />
            </div>

            {/* Product Information */}

            <div
              className={classNames('d-none d-md-block', styles.productInfo)}
            >
              {productInfo}
            </div>
          </div>

          <div className="col-12 d-block d-md-none">
            <div className={styles.productInfo}>{productInfo}</div>
          </div>

          {/* Product Description */}

          <div
            className={classNames('col-12', styles.productDescriptionContainer)}
          >
            <div className={styles.productDescription}>
              <h2 className={styles.productDescriptionTitle}>
                Bundle Description
              </h2>

              <div>{htmlParser(bundleDescriptionHtml)}</div>

              <Card className={styles.colorList}>
                <Card.Header
                  onClick={() => setOpen(!open)}
                  aria-controls="color-list-content"
                  aria-expanded={open}
                  className={styles.colorListHeader}
                  style={{ color: '#000', cursor: 'pointer' }}
                >
                  {COLOR_LIST_TITLE_SOLIDS_NAMED}
                </Card.Header>
                <Collapse in={open} className={styles.colorListContent}>
                  <div id="color-list-content">{COLOR_LIST_SOLIDS_NAMED}</div>
                </Collapse>
              </Card>
            </div>
          </div>
        </main>

        {/* Preview of Pack Covers in the Bundle */}

        {bundlePreviewData ? (
          <>
            <h2 className={styles.packPreviewsTitle}>
              Get ALL these {bundleData.text.subtitle.toLowerCase()}
              &nbsp; for just&nbsp;
              {`$${getFormattedPrice(commercialBundleLicense.price.usd)} US`}!
            </h2>

            {allPacks.map((elementPacks, indexPacks) => {
              return (
                <Fragment key={elementPacks}>
                  <h3
                    className={styles.productSubtitle}
                  >{`${allPacksSubtitles[indexPacks]} (${elementPacks.length} Packs):`}</h3>

                  <div
                    className={classNames('row', styles.packPreviewsContainer)}
                  >
                    {elementPacks.map((elementPack) => {
                      const screenshot = elementPack.screenshots[0];
                      const imageFolder = `${CDN_ROOT}/${screenshot.subfolder}`;

                      return (
                        <div
                          key={screenshot.alt}
                          className={classNames(
                            'col-12 col-sm-6 col-lg-4',
                            styles.packPreviewContainer
                          )}
                        >
                          <PackPreview
                            src={`${imageFolder}/${screenshot.tileLarge}.${SCREENSHOT_IMAGE_FORMAT}`}
                            alt={screenshot.alt}
                            title={screenshot.alt}
                            license={commercialPackLicense}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Back to top link */}

                  <div
                    className={classNames('row', styles.backToTopLinkContainer)}
                  >
                    <div className="col">
                      <a
                        href="#main"
                        className={classNames('d-inline-block', styles.link)}
                      >
                        Back to top
                      </a>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </>
        ) : (
          <ErrorMessage
            errorMessage="Unable to load packs."
            className={styles.errorMessage}
          />
        )}

        {/* Product Keywords */}

        <div className={classNames('row', styles.tagsContainer)}>
          <div className="col">
            <Tags
              tags={bundleData.tags}
              title="Bundle Keywords"
              className={styles.tags}
            />
          </div>
        </div>
      </Page>
    </>
  );
};

BundlePage.propTypes = {
  bundleData: PropTypes.object.isRequired,
  bundlePreviewData: PropTypes.object,
};

export default BundlePage;
