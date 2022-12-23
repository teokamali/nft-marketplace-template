import React, { FC, ReactNode, useEffect } from "react";
import { ReactFC } from "src/types/types";
import Header from "../Header/Header";
import { Container, LayoutMain, LayoutWrapper } from "./LayoutStyles";

const Layout: ReactFC = ({ children }) => {
    return (
        <LayoutWrapper>
            <header>
                <Container>
                    <Header />
                </Container>
            </header>
            <LayoutMain>
                <Container>{children}</Container>
            </LayoutMain>
            <footer>
                <Container>Footer</Container>
            </footer>
        </LayoutWrapper>
    );
};
export default Layout;
