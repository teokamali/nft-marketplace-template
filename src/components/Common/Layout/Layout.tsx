import React, { FC, ReactNode } from "react";
import { LayoutMain, LayoutWrapper } from "./LayoutStyles";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <LayoutWrapper>
            <header>Header</header>
            <LayoutMain>{children}</LayoutMain>
            <footer>Footer</footer>
        </LayoutWrapper>
    );
};
export default Layout;
