import PropTypes from 'prop-types';

import classNames from 'classnames';

import BundlePreview from './BundlePreview';

import { CDN_ROOT, SCREENSHOT_IMAGE_FORMAT } from 'constants/assetConstants';
import { LICENSE } from 'constants/checkoutConstants';
import { BUNDLE_PATH } from 'constants/navigationConstants';

import { getBundleLicense } from 'utils/checkoutUtils';

import styles from './BundlesPreview.module.scss';

/**
 * Bundles preview component.
 */
const BundlesPreview = ({ data, className }) => (
  <div className={classNames('row', className)}>
    {data.map((elementBundle) => {
      const screenshot = elementBundle.screenshots[0];
      const subfolder = screenshot.subfolder;

      return (
        <div
          key={elementBundle.text.title}
          className={classNames(
            'col-12 col-sm-6',
            styles.bundlePreviewContainer
          )}
        >
          <BundlePreview
            href={`${BUNDLE_PATH}/${elementBundle.url}`}
            src={`${CDN_ROOT}/${subfolder}/${screenshot.previewSmall}.${SCREENSHOT_IMAGE_FORMAT}`}
            alt={screenshot.alt}
            title={elementBundle.text.title}
            subtitle={elementBundle.text.subtitle}
            license={getBundleLicense(
              elementBundle.elementId,
              LICENSE.commercial.id
            )}
          />
        </div>
      );
    })}
  </div>
);

BundlesPreview.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

export default BundlesPreview;
