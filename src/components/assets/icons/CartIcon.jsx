import { memo } from 'react';

/**
 * Cart icon
 */
const CartIcon = () => (
  <svg id="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19.2,19.2a2.4,2.4,0,1,1-2.4,2.4,2.4,2.4,0,0,1,2.4-2.4M0,0H3.924L5.052,2.4H22.8A1.2,1.2,0,0,1,24,3.6a1.518,1.518,0,0,1-.144.6L19.56,11.964a2.41266,2.41266,0,0,1-2.1,1.236H8.52L7.44,15.156l-.036.144a.3.3,0,0,0,.3.3H21.6V18H7.2a2.39933,2.39933,0,0,1-2.4-2.4,2.44558,2.44558,0,0,1,.288-1.152l1.632-2.94L2.4,2.4H0V0M7.2,19.2a2.4,2.4,0,1,1-2.4,2.4,2.4,2.4,0,0,1,2.4-2.4M18,10.8l3.336-6H6.168L9,10.8Z" />
  </svg>
);

export default memo(CartIcon);
