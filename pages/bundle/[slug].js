/* COMPONENTS */

import BundlePageContainer from 'components/pages/bundle/BundlePageContainer';

/* CONSTANTS */

import { API_ROUTE_BUNDLE_PREVIEW } from 'constants/ApiConstants';
import { ERROR_MESSAGE } from 'constants/MessageConstants';

/* DATA */

import dataBundles from 'data/bundles/bundles.js';


const Bundle = (props) => <BundlePageContainer {...props} />;

const getProps = (bundleData, bundlePreviewData, error) => (
    {
        props: {
            bundleData: bundleData,
            bundlePreviewData: bundlePreviewData,
            error: !bundleData ? error : null
        }
    }
);

export const getServerSideProps = async ({ params }) => {
    const { slug } = params;

    let bundleData = null;
    let bundlePreviewData = null;

    if (!slug) {
        return getProps(
            bundleData,
            bundlePreviewData,
            {
                errorCode: 404,
                errorMessage: ERROR_MESSAGE[404]
            });
    }

    try {
        const matches = [...slug.matchAll(/-(\d+)/g)];
        const id = matches.length > 0 ? matches[matches.length - 1][1] : '';

        const matchingBundles = dataBundles.filter(element => id === element.elementIdNumber);
        bundleData = matchingBundles.length > 0 ? matchingBundles[0] : null;

        const bundlePreviewResponse = await fetch(`${API_ROUTE_BUNDLE_PREVIEW}/${id}`);
        if (bundlePreviewResponse.ok) {
            bundlePreviewData = await bundlePreviewResponse.json();
        }
    } catch(e) {
        return getProps(
            bundleData,
            bundlePreviewData,
            {
                errorCode: 404,
                errorMessage: ERROR_MESSAGE.default
            });
    }

    return getProps(
        bundleData,
        bundlePreviewData,
        {
            errorCode: 404,
            errorMessage: ERROR_MESSAGE[404]
        });
};

export default Bundle;
