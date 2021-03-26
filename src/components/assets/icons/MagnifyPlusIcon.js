/* REACT */

import { memo } from 'react';


/**
 * Magnifying glass with plus sign icon for rendering as inline SVG.
 */

const MagnifyPlusIcon = () => (
    <svg id="magnify-plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M17.1,15.1l6.9,6.9L21.9,24l-6.9-6.9v-1.1l-0.4-0.4c-1.6,1.3-3.6,2.2-5.8,2.2C4,17.8,0,13.8,0,8.9S4,0,8.9,0s8.9,4,8.9,8.9
	c0,2.2-0.8,4.2-2.2,5.8l0.4,0.4H17.1 M8.9,15.1c3.4,0,6.2-2.7,6.2-6.2s-2.7-6.2-6.2-6.2S2.7,5.5,2.7,8.9S5.5,15.1,8.9,15.1
	 M12.3,9.6H9.6v2.7H8.2V9.6H5.5V8.2h2.7V5.5h1.4v2.7h2.7V9.6z"
        />
    </svg>
);

export default memo(MagnifyPlusIcon);
