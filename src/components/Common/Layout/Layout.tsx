import React, { FC, ReactNode } from "react";
import { LayoutWrapper } from "./LayoutStyles";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <LayoutWrapper>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </LayoutWrapper>
    );
};
export default Layout;
