import fs from 'fs';
import path from 'path';

import BundlePage from 'components/pages/bundle/BundlePage';

import { DATA_BUNDLE_PREVIEW } from 'constants/dataConstants';
import { ERROR_MESSAGE } from 'constants/messageConstants';

import dataBundles from 'data/bundles.json';

const Bundle = (props) => <BundlePage {...props} />;

const getProps = (bundleData, bundlePreviewData, error) => ({
  props: {
    bundleData: bundleData,
    bundlePreviewData: bundlePreviewData,
    error: !bundleData ? error : null,
  },
});

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  let bundleData = null;

  // Validate `slug` parameter.
  if (!slug) {
    return getProps(bundleData, bundlePreviewData, {
      errorCode: 404,
      errorMessage: ERROR_MESSAGE[404],
    });
  }

  let bundlePreviewData;

  try {
    // Extract ID from slug.
    const matches = [...slug.matchAll(/-(\d+)/g)];
    const id = matches.length > 0 ? matches[matches.length - 1][1] : null;

    if (!id) {
      throw new Error('Invalid or missing bundle ID in slug.');
    }

    // Find matching bundle data.
    const matchingBundles = dataBundles.filter(
      (element) => id === element.elementIdNumber
    );
    bundleData = matchingBundles.length > 0 ? matchingBundles[0] : null;

    if (!bundleData) {
      throw new Error('Bundle data not found.');
    }

    // Get bundle preview data.
    const filePath = path.join(
      process.cwd(),
      DATA_BUNDLE_PREVIEW,
      `${id}.json`
    );
    if (!fs.existsSync(filePath)) {
      throw new Error(`Data file not found: ${filePath}`);
      return;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    bundlePreviewData = JSON.parse(fileContent);
  } catch (error) {
    console.error('Error in getServerSideProps:', error.message);
    const isNotFoundError = error.message.includes('not found');
    const errorCode = isNotFoundError ? 404 : 500;
    const errorMessage = isNotFoundError
      ? ERROR_MESSAGE[404]
      : ERROR_MESSAGE.default;

    return getProps(bundleData, bundlePreviewData, {
      errorCode,
      errorMessage,
    });
  }

  // Return data if everything succeeds.
  return getProps(bundleData, bundlePreviewData, {});
};

export default Bundle;
