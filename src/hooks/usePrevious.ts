import { useEffect, useRef } from "react";

/** Get the previous props or state
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>(undefined);

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}
