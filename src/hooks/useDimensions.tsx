import { RefObject, useEffect, useState } from "react";

export const useDimensions = (node: RefObject<HTMLElement | null>) => {
    const [dimensions, setDimensions] = useState({
    });

    useEffect(() => {
        if(!node) return;
        const observedNode = node.current;

        const resizeObserver = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setDimensions({ width, height });
        });

        if (observedNode) {
            resizeObserver.observe(observedNode);
        }
        return () => {
            if (observedNode) {
                resizeObserver.unobserve(observedNode);
            }
        };
    }, [setDimensions, node]);

    return dimensions;
};
