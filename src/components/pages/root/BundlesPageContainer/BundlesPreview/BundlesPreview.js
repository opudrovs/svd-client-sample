import PropTypes from 'prop-types';

const classNames = require('classnames');

import BundlePreview from './BundlePreview/BundlePreview';

import { CDN_ROOT, SCREENSHOT_IMAGE_FORMAT } from 'constants/AssetConstants';
import { LICENSES } from 'constants/CheckoutConstants';
import { BUNDLE_PATH } from 'constants/NavigationConstants';

import { getBundleLicense } from 'utils/CheckoutUtils';

import styles from './BundlesPreview.module.scss';

/**
 * Bundles preview.
 */

const BundlesPreview = ({ data, externalClassName }) => (
    <div className={classNames(
        'row',
        externalClassName
    )}>
        {data.map((elementBundle, index) => {
            const screenshot = elementBundle.screenshots[0];
            const subfolder = screenshot.subfolder;

            return (
                <div
                    key={`bundle-preview-${index}`}
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
                        license={getBundleLicense(elementBundle.elementId, LICENSES.COMMERCIAL.id)}
                    />
                </div>
            );
        })}
    </div>
);

BundlesPreview.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    externalClassName: PropTypes.string
};

export default BundlesPreview;
