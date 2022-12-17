import React, { FC, ReactNode, useEffect } from "react";
import Header from "../Header/Header";
import { LayoutMain, LayoutWrapper } from "./LayoutStyles";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <LayoutWrapper>
            <Header />
            <LayoutMain>{children}</LayoutMain>
            <footer>Footer</footer>
        </LayoutWrapper>
    );
};
export default Layout;
