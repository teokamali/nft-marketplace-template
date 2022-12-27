import React, { FC, ReactNode, useEffect } from "react";
import { ReactFC } from "src/types/types";
import Header from "../Header/Header";
import { Container, LayoutMain, LayoutWrapper } from "./LayoutStyles";

const Layout: ReactFC = ({ children }) => {
    return (
        <LayoutWrapper>
            <header>
                <Header />
            </header>
            <LayoutMain>{children}</LayoutMain>
            <footer>Footer</footer>
        </LayoutWrapper>
    );
};
export default Layout;
