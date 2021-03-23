import { memo } from 'react';

/**
 * Close icon for rendering as inline SVG.
 */

const CloseIcon = () => (
    <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24,2.4L21.6,0L12,9.6L2.4,0L0,2.4L9.6,12L0,21.6L2.4,24l9.6-9.6l9.6,9.6l2.4-2.4L14.4,12L24,2.4z" />
    </svg>
);

export default memo(CloseIcon);
