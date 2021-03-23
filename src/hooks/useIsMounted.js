import { useRef, useCallback, useEffect } from 'react';

export const useIsMounted = () => {
    const ref = useRef(false);

    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        }

        return () => {
            ref.current = false;
        };
    }, []);

    return useCallback(() => ref.current, []);
};