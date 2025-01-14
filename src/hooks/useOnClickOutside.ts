import { useEffect } from "react";
import arePassiveEventsSupported from "are-passive-events-supported";
import useLatest from "use-latest";

const MOUSEDOWN = "mousedown";
const TOUCHSTART = "touchstart";

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
type HandledEventsType = HandledEvents[number];
type PossibleEvent = {
    [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];
type Handler = (event: PossibleEvent) => void;

const events: HandledEvents = [MOUSEDOWN, TOUCHSTART];

const getAddOptions = (
    event: HandledEventsType
): AddEventListenerOptions | undefined => {
    if (event === TOUCHSTART && arePassiveEventsSupported()) {
        return { passive: true };
    }
};

const currentDocument = typeof document !== "undefined" ? document : undefined;

export default function useOnClickOutside(
    ref: React.RefObject<HTMLElement>,
    handler: Handler | null,
    { document = currentDocument } = {}
) {
    const handlerRef = useLatest(handler);

    useEffect(() => {
        if (!handler) {
            return;
        }
        if (typeof document === "undefined") {
            return;
        }
        const listener = (event: PossibleEvent) => {
            if (
                !ref.current ||
                !handlerRef.current ||
                ref.current.contains(event.target as Node)
            ) {
                return;
            }

            handlerRef.current(event);
        };

        events.forEach(event => {
            document.addEventListener(event, listener, getAddOptions(event));
        });

        return () => {
            events.forEach(event => {
                document.removeEventListener(event, listener);
            });
        };
    }, [!handler]);
}
// export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
//     ref: RefObject<T>,
//     handler: () => void
// ): void {
//     useEffect(() => {
//         const listener = event => {
//             // Do nothing if clicking ref's element or descendent elements
//             if (!ref.current || ref.current.contains(event.target)) {
//                 return;
//             }
//             handler(event);
//         };
//         document.addEventListener("mousedown", listener);
//         document.addEventListener("touchstart", listener);
//         return () => {
//             document.removeEventListener("mousedown", listener);
//             document.removeEventListener("touchstart", listener);
//         };
//     }, [ref, handler]);
// }

// export default useOnClickOutside;
