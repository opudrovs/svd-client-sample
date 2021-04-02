/* REACT */

import { memo } from 'react';


/**
 * Menu icon for rendering as inline SVG.
 */

const MenuIcon = () => (
    <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0,4h24v2.7H0V4 M0,10.7h24v2.7H0V10.7 M0,17.3h24V20H0V17.3z" />
    </svg>
);

export default memo(MenuIcon);
