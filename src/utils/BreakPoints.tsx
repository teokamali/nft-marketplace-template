import { useMediaQuery } from "react-responsive";
import { ReactFC } from "src/types/types";

export const Desktop: ReactFC = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    return isDesktop ? <>{children}</> : null;
};
export const Tablet: ReactFC = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    return isTablet ? <>{children}</> : null;
};
export const Mobile: ReactFC = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? <>{children}</> : null;
};
export const ExceptMobile: ReactFC = ({ children }) => {
    const isGreaterThenMobile = useMediaQuery({ minWidth: 767 });
    return isGreaterThenMobile ? <>{children}</> : null;
};
